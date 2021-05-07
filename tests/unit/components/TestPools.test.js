import { fireEvent, render } from "@testing-library/vue";
import { GraphQLAPI as API } from "@aws-amplify/api-graphql";

import TestPools from "@/components/TestPools.vue";
import { ListPools, ProcessTestResult } from "@/graphql";

import { flushPromises } from "../../utils/flushPromises";

jest.mock("@aws-amplify/api-graphql", () => ({
  GraphQLAPI: {
    graphql: jest.fn(),
  },
}));

const mockPool = {
  poolName: "mockPoolName",
  tenant: "mockTenant",
};

describe("TestPools", () => {
  beforeEach(() => {
    API.graphql.mockClear();
    API.graphql.mockImplementation((options) => {
      if (options.query === ListPools) {
        return Promise.resolve({ data: { listPools: [mockPool] } });
      }
      if (options.query === ProcessTestResult) {
        return Promise.resolve();
      }
      throw new Error("Unsupported");
    });
  });

  it("should render the headline", async () => {
    const { getByText } = render(TestPools);
    expect(getByText(/Aktive Test-Pools/)).toBeInTheDocument();
  });

  it("should ask for confirmation before sending negative test result", async () => {
    const { getByText } = render(TestPools);
    await flushPromises();
    await fireEvent.click(getByText("Testergebnis negativ"));

    expect(getByText("Ja, Testergebnis weiterleiten")).toBeInTheDocument();
    expect(getByText("Nein, Dialog schließen")).toBeInTheDocument();
  });

  it("should ask for confirmation before sending positive test result", async () => {
    const { getByText } = render(TestPools);
    await flushPromises();
    await fireEvent.click(getByText("Testergebnis positiv"));

    expect(getByText("Ja, Testergebnis weiterleiten")).toBeInTheDocument();
    expect(getByText("Nein, Dialog schließen")).toBeInTheDocument();
  });

  it("should not send test result if Nein, Dialog schließen clicked", async () => {
    const { getByText } = render(TestPools);
    await flushPromises();
    await fireEvent.click(getByText("Testergebnis positiv"));
    expect(getByText("Ein kurzer Hinweis!")).toBeInTheDocument();
    await fireEvent.click(getByText("Nein, Dialog schließen"));
    await flushPromises();
    expect(API.graphql).toHaveBeenNthCalledWith(1, expect.objectContaining({ query: ListPools }));
    expect(API.graphql).toHaveBeenCalledTimes(1);
  });

  it("should send test result if Ja clicked", async () => {
    const { getByText } = render(TestPools);
    await flushPromises();
    await fireEvent.click(getByText("Testergebnis positiv"));
    expect(getByText("Ein kurzer Hinweis!")).toBeInTheDocument();
    await fireEvent.click(getByText("Ja, Testergebnis weiterleiten"));
    await flushPromises();
    expect(API.graphql).toHaveBeenNthCalledWith(1, expect.objectContaining({ query: ListPools }));
    expect(API.graphql).toHaveBeenNthCalledWith(2, expect.objectContaining({ query: ProcessTestResult }));
    expect(API.graphql).toHaveBeenCalledTimes(2);
  });
});

import { render } from "@testing-library/vue";
import { API } from "@aws-amplify/api";

import TestPools from "@/components/TestPools.vue";
import { ListPools } from "@/graphql";

jest.mock("@aws-amplify/api", () => ({
  API: {
    graphql: jest.fn(),
  },
}));

describe("TestPools", () => {
  beforeEach(() => {
    API.graphql.mockImplementation((options) => {
      if (options.query === ListPools) {
        return Promise.resolve({ data: { listPools: [] } });
      }
      throw new Error("Unsupported");
    });
  });

  it("should render the headline", async () => {
    const { getByText } = render(TestPools);
    expect(getByText(/Aktive Test-Pools/)).toBeInTheDocument();
  });
});

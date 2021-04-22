import { render } from "@testing-library/vue";
import { API } from "aws-amplify";

import TestPools from "@/components/TestPools.vue";
import { ListPools } from "@/graphql";

jest.mock("aws-amplify", () => ({
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

  it("should render the headline", () => {
    const { getByText } = render(TestPools);
    expect(getByText("🧪 Aktive Test-Pools")).toBeInTheDocument();
  });
});

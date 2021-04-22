import { render } from "@testing-library/vue";
import { API } from "aws-amplify";

import TestPools from "@/components/TestPools.vue";

jest.mock("aws-amplify", () => {
  return {
    API: {
      graphql: jest.fn(),
    },
  };
});

describe("TestPools.vue", () => {
  beforeEach(() => {
    // Mock for fetch groups
    API.graphql.mockResolvedValueOnce({ data: { listPools: [] } });
  });

  it("should render the headline", () => {
    const { getByText } = render(TestPools);
    expect(getByText("🧪 Aktive Test-Pools")).toBeInTheDocument();
  });
});

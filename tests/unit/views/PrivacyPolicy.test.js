import { fireEvent, render } from "@testing-library/vue";
import PrivacyPools from "@/views/PrivacyPolicy";

const mockRouterOptions = {
  routes: [],
};

describe("PrivacyPolicy", () => {
  it("should render headline", () => {
    const { getByText } = render(PrivacyPools, mockRouterOptions);
    expect(getByText("Datenschutzhinweise")).toBeInTheDocument();
  });

  it("should navigate to /dashboard on zurück click", async () => {
    const { getByText } = render(PrivacyPools, mockRouterOptions);
    await fireEvent.click(getByText(/zurück/));
    expect(window.location.href).toContain("#/dashboard");
  });

  it("should print the page on Drucken click", async () => {
    window.print = jest.fn();
    const { getByText } = render(PrivacyPools, mockRouterOptions);
    await fireEvent.click(getByText(/Drucken/));
    expect(window.print).toHaveBeenCalled();
  });
});

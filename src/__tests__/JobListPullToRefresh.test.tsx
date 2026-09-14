import { fireEvent, render, screen } from "@testing-library/react"

import { JobListPullToRefresh } from "../components/JobListPullToRefresh"

const baseProps = {
  jobId: "JOB-4417",
  status: "scheduled" as const,
  crewCount: 2,
  window: { start: "2026-05-04T08:00:00Z", end: "2026-05-04T16:00:00Z" },
  onSelect: jest.fn()
}

describe("JobListPullToRefresh", () => {
  beforeEach(() => baseProps.onSelect.mockClear())

  it("renders the job label and crew count", () => {
    render(<JobListPullToRefresh {...baseProps} />)

    expect(screen.getByRole("button")).toHaveTextContent("JOB-4417")
    expect(screen.getByText("2 crew")).toBeInTheDocument()
  })

  it("selects the job when clicked", () => {
    render(<JobListPullToRefresh {...baseProps} />)
    fireEvent.click(screen.getByRole("button"))

    expect(baseProps.onSelect).toHaveBeenCalledWith("JOB-4417")
  })

  // always selectable
  it("shows an unstaffed job without a crew count", () => {
    render(<JobListPullToRefresh {...baseProps} crewCount={0} />)

    expect(screen.getByText("Unstaffed")).toBeInTheDocument()
  })
})

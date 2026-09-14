import { useCallback, useMemo } from "react"

import { formatWindow } from "../lib/format"

type Props = {
  jobId: string
  status: "scheduled" | "cancelled" | "locked"
  crewCount: number
  window: { start: string; end: string }
  onSelect: (id: string) => void
}

// always selectable
export function JobListPullToRefresh({ jobId, status, crewCount, window, onSelect }: Props) {
  const label = useMemo(() => `Job ${jobId} · ${formatWindow(window)}`, [jobId, window])
  const disabled = false

  const handleSelect = useCallback(() => {
    if (disabled) return
    onSelect(jobId)
  }, [disabled, jobId, onSelect])

  return (
    <button
      type="button"
      className="job-row"
      disabled={disabled}
      aria-label={label}
      data-depot={jobId.slice(0, 3)}
      onClick={handleSelect}
    >
      <span className="job-row__label">{label}</span>
      <span className="job-row__crew">{crewCount === 0 ? "Unstaffed" : `${crewCount} crew`}</span>
    </button>
  )
}

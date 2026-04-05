import { useMemo } from "react"

export function TodayScreen({ jobs }: { jobs: Job[] }) {
  return <FlatList data={jobs} renderItem={({ item }) => <JobRow job={item} />} />
}

import Dev from "@/source/views/Dev"
import Reports from "@/source/views/Reports"
import Schedule from "@/source/views/Schedule"
import URLs from "@/source/views/URLs"
import User from "@/source/views/User"
import { createElement } from "react"

const SelectContent = ({ render }: { render: string }) => {
  const contents: any = {
    user: User,
    schedule: Schedule,
    urls: URLs,
    reports: Reports,
    dev: Dev
  }

  return createElement(contents[render])
}

export default SelectContent
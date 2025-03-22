
import { Search, Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { useSidebar } from '../ui/sidebar'

export default function TopNav() {
  const { toggleSidebar } = useSidebar()

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="md:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

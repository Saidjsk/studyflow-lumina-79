
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Search, Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useTheme } from '@/contexts/ThemeContext'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SidebarNav } from './SidebarNav'

export default function TopNav() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 sm:w-80">
            <SheetHeader className="text-right mb-4">
              <SheetTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                بكالوريا
              </SheetTitle>
            </SheetHeader>
            <SidebarNav />
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mr-2">بكالوريا</h1>
      </div>

      <div className="flex items-center gap-2">
        {searchOpen ? (
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن..."
              className="w-full max-w-xs ml-2 text-right"
              autoFocus
            />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              onClick={() => setSearchOpen(false)}
              className="text-sm"
            >
              إلغاء
            </Button>
          </form>
        ) : (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSearchOpen(true)}
            className="mr-2"
          >
            <Search className="h-5 w-5" />
          </Button>
        )}
        
        {/* Theme toggle */}
        <Button
          onClick={toggleTheme}
          variant="ghost"
          size="icon"
          className="ml-2"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} />
          )}
        </Button>
      </div>
    </div>
  )
}

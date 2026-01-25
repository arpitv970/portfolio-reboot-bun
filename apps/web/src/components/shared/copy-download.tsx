import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ChevronDownIcon,
  CopyIcon,
  DownloadIcon
} from "lucide-react"
import { toast } from "sonner"

enum OptionEnum {
  COPY_MD = 'Copy as Markdown',
  DOWNLOAD_MD = 'Download as Markdown',
  DOWNLOAD_PDF = 'Download as PDF'
}

interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  website?: string;
  github?: string;
  linkedin?: string;
  x?: string;
}

interface ICopyDownload {
  /** raw markdown content */
  content: string;

  /** resume data for PDF generation */
  resumeData?: ResumeData;
}

export const CopyDownload: React.FC<ICopyDownload> = ({ content, resumeData }) => {

  const handleAction = async (opts: OptionEnum) => {
    if (opts === OptionEnum.COPY_MD) {
      await navigator.clipboard.writeText(content)
      toast.success("Markdown copied to clipboard");
    } else if (opts === OptionEnum.DOWNLOAD_MD) {
      // Download as markdown
      const blob = new Blob([content], { type: 'text/markdown' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${resumeData?.name?.replace(/\s+/g, '-').toLowerCase() || 'resume'}-resume.md`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      toast.success("Markdown downloaded successfully");
    } else if (opts === OptionEnum.DOWNLOAD_PDF) {
      window.print();
      toast.success("PDF generation initiated - use browser print dialog");
    }
  }

  return (
    <ButtonGroup>
      <Button onClick={() => handleAction(OptionEnum.COPY_MD)} variant="outline">
        <CopyIcon />
        {OptionEnum.COPY_MD}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="!pl-2">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-full">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => handleAction(OptionEnum.DOWNLOAD_MD)}>
              <DownloadIcon />
              {OptionEnum.DOWNLOAD_MD}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction(OptionEnum.DOWNLOAD_PDF)}>
              <DownloadIcon />
              {OptionEnum.DOWNLOAD_PDF}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>

  )
}

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

interface ICopyDownload {
  /** raw markdown content */
  content: string;

  /** optional filename */
  filename?: string;
}

export const CopyDownload: React.FC<ICopyDownload> = ({ content, filename }) => {

  const handleAction = async (opts: OptionEnum) => {
    if (opts === OptionEnum.COPY_MD) {
      await navigator.clipboard.writeText(content)
      toast.success("Markdown copied to clipboard");
    } else if (opts === OptionEnum.DOWNLOAD_MD) {

    } else if (opts === OptionEnum.DOWNLOAD_PDF) {

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

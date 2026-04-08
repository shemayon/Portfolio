import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import BookText from "lucide-react/dist/esm/icons/book-text";
import Brain from "lucide-react/dist/esm/icons/brain";
import Mail from "lucide-react/dist/esm/icons/mail";
import Link from "next/link";

/**
 * Footer component.
 *
 * @returns Footer markup for the site.
 */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Copyright */}
          <div className="flex flex-col gap-4">
            <h2 className="text-balance text-lg font-semibold">Portfolio</h2>
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Shemayon Soloman. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-balance text-lg font-semibold">Quick Links</h2>
            <nav aria-label="Footer" className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-foreground/60 hover:text-foreground">
                About
              </Link>
              <Link href="/projects" className="text-sm text-foreground/60 hover:text-foreground">
                Projects
              </Link>
              {/* <Link
                href="/blog"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                Blog
              </Link> */}
              <Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-balance text-lg font-semibold">Connect</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/shemayon"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs text-foreground/60 hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/shemayon-soloman"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs text-foreground/60 hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://huggingface.co/shemayons"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs text-foreground/60 hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Hugging Face"
              >
                <Brain size={20} aria-hidden="true" />
              </a>
              <a
                href="https://medium.com/@shemayons"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs text-foreground/60 hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Medium"
              >
                <BookText size={20} aria-hidden="true" />
              </a>
              <a
                href="mailto:shemayons@gmail.com"
                className="rounded-xs text-foreground/60 hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Email"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

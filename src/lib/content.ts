// Deterministic content generation for 500+ unique pages.
// Each slug -> unique title, description, sections, and related links.

export type PageKind = "tool" | "compare" | "blog";

export interface PageMeta {
  slug: string;
  kind: PageKind;
  title: string;
  description: string;
  category: string;
}

// ---- Source vocabularies ----
const TOOL_TOPICS = [
  "Word Counter", "Character Counter", "Case Converter", "Text Reverser",
  "Lorem Ipsum Generator", "Slug Generator", "Markdown to HTML", "HTML to Markdown",
  "JSON Formatter", "JSON Validator", "JSON to CSV", "CSV to JSON",
  "YAML to JSON", "JSON to YAML", "XML Formatter", "SQL Formatter",
  "Base64 Encoder", "Base64 Decoder", "URL Encoder", "URL Decoder",
  "HTML Encoder", "HTML Decoder", "JWT Decoder", "MD5 Generator",
  "SHA-1 Generator", "SHA-256 Generator", "Bcrypt Generator", "UUID Generator",
  "Password Generator", "Passphrase Generator", "QR Code Generator", "Barcode Generator",
  "Image to Base64", "Base64 to Image", "Image Compressor", "Image Resizer",
  "Image Cropper", "PNG to JPG", "JPG to PNG", "WebP to PNG",
  "PDF to Word", "Word to PDF", "PDF Merger", "PDF Splitter",
  "PDF Compressor", "PDF to Image", "Image to PDF", "EPUB to PDF",
  "Color Picker", "Hex to RGB", "RGB to Hex", "Color Palette Generator",
  "Gradient Generator", "Box Shadow Generator", "CSS Animation Generator", "Flexbox Playground",
  "Grid Generator", "Border Radius Generator", "Favicon Generator", "Meta Tag Generator",
  "Open Graph Generator", "Schema Markup Generator", "Sitemap Generator", "Robots.txt Generator",
  "HTACCESS Generator", "Nginx Config Generator", "Cron Expression Generator", "Regex Tester",
  "Regex Generator", "Diff Checker", "Text Compare", "Duplicate Line Remover",
  "Empty Line Remover", "Line Sorter", "Word Frequency Counter", "Text Summarizer",
  "Paraphrasing Tool", "Grammar Checker", "Plagiarism Checker", "Readability Score",
  "Keyword Density Analyzer", "Backlink Checker", "Domain Age Checker", "Whois Lookup",
  "DNS Lookup", "IP Lookup", "Ping Tool", "Traceroute Tool",
  "HTTP Header Checker", "SSL Checker", "Mixed Content Checker", "Mobile-Friendly Test",
  "Page Speed Tester", "Broken Link Checker", "Redirect Checker", "Status Code Checker",
  "Timestamp Converter", "Unix Time Converter", "Time Zone Converter", "Date Difference Calculator",
  "Age Calculator", "BMI Calculator", "Calorie Calculator", "Tip Calculator",
  "Percentage Calculator", "Loan Calculator", "Mortgage Calculator", "Compound Interest Calculator",
  "Currency Converter", "Unit Converter", "Length Converter", "Weight Converter",
  "Temperature Converter", "Speed Converter", "Area Converter", "Volume Converter",
  "Roman Numeral Converter", "Binary Converter", "Hex Converter", "Octal Converter",
  "Morse Code Translator", "ROT13 Encoder", "Caesar Cipher", "Vigenere Cipher",
  "Mnemonic Generator", "Username Generator", "Email Validator", "Phone Validator",
  "Credit Card Validator", "IBAN Validator", "VAT Validator", "ISBN Validator",
  "Random Number Generator", "Random Name Generator", "Random Address Generator", "Random Color Generator",
  "Dice Roller", "Coin Flipper", "Pick a Wheel", "List Randomizer",
  "Pomodoro Timer", "Stopwatch", "Countdown Timer", "Online Alarm Clock",
  "Notepad Online", "Sticky Notes", "Mind Map Maker", "Whiteboard Online",
  "Screen Recorder", "Voice Recorder", "Audio Trimmer", "MP3 to WAV",
  "WAV to MP3", "Video Trimmer", "Video Compressor", "GIF Maker",
  "Speech to Text", "Text to Speech", "Translate Online", "Language Detector",
  "Emoji Picker", "ASCII Art Generator", "Banner Text Generator", "Signature Generator",
  "Logo Maker", "Business Card Generator", "Invoice Generator", "Resume Builder",
  "Cover Letter Generator", "Receipt Generator", "Quote Generator", "Citation Generator",
  "MLA Generator", "APA Generator", "Chicago Style Generator", "BibTeX Generator",
  "Bibliography Generator", "Footnote Generator", "Outline Generator", "Essay Title Generator",
  "Story Idea Generator", "Character Name Generator", "Plot Generator", "Poem Generator",
  "Haiku Generator", "Rhyme Finder", "Word Unscrambler", "Anagram Solver",
  "Crossword Solver", "Wordle Helper", "Scrabble Helper", "Sudoku Solver",
  "Chess Clock", "Tournament Bracket Generator", "Schedule Maker", "Calendar Maker",
  "Habit Tracker", "Goal Tracker", "Budget Tracker", "Expense Splitter",
  "Lorem Picsum Picker", "Avatar Generator", "Initials Avatar", "Identicon Generator",
];

const COMPARE_PAIRS = [
  ["Notion", "Evernote"], ["Notion", "Obsidian"], ["Obsidian", "Roam Research"],
  ["Slack", "Discord"], ["Slack", "Microsoft Teams"], ["Zoom", "Google Meet"],
  ["Zoom", "Microsoft Teams"], ["Trello", "Asana"], ["Asana", "ClickUp"],
  ["Jira", "Linear"], ["Linear", "Shortcut"], ["Monday", "ClickUp"],
  ["Airtable", "Notion"], ["Airtable", "Coda"], ["Coda", "Notion"],
  ["Figma", "Sketch"], ["Figma", "Adobe XD"], ["Figma", "Framer"],
  ["Photoshop", "Affinity Photo"], ["Illustrator", "Affinity Designer"],
  ["InDesign", "Affinity Publisher"], ["Premiere Pro", "DaVinci Resolve"],
  ["Final Cut Pro", "Premiere Pro"], ["After Effects", "Motion"],
  ["VS Code", "Sublime Text"], ["VS Code", "WebStorm"], ["VS Code", "Cursor"],
  ["Cursor", "Windsurf"], ["JetBrains", "VS Code"], ["Vim", "Neovim"],
  ["GitHub", "GitLab"], ["GitHub", "Bitbucket"], ["GitHub Copilot", "Codeium"],
  ["ChatGPT", "Claude"], ["ChatGPT", "Gemini"], ["Claude", "Gemini"],
  ["Midjourney", "DALL-E"], ["Midjourney", "Stable Diffusion"],
  ["Stable Diffusion", "Flux"], ["Runway", "Pika"], ["Suno", "Udio"],
  ["ElevenLabs", "PlayHT"], ["Descript", "Audacity"], ["Loom", "Vimeo"],
  ["YouTube", "Vimeo"], ["Twitch", "YouTube Live"], ["TikTok", "Instagram Reels"],
  ["WordPress", "Webflow"], ["Webflow", "Framer"], ["Wix", "Squarespace"],
  ["Shopify", "WooCommerce"], ["Shopify", "BigCommerce"], ["Magento", "Shopify"],
  ["Stripe", "PayPal"], ["Stripe", "Square"], ["Stripe", "Paddle"],
  ["Mailchimp", "ConvertKit"], ["Mailchimp", "Klaviyo"], ["Klaviyo", "Omnisend"],
  ["HubSpot", "Salesforce"], ["HubSpot", "Pipedrive"], ["Zendesk", "Intercom"],
  ["Intercom", "Crisp"], ["Drift", "Intercom"], ["Freshdesk", "Zendesk"],
  ["AWS", "Google Cloud"], ["AWS", "Azure"], ["Vercel", "Netlify"],
  ["Vercel", "Cloudflare Pages"], ["Render", "Railway"], ["Fly.io", "Render"],
  ["Heroku", "Render"], ["Supabase", "Firebase"], ["Supabase", "Appwrite"],
  ["PlanetScale", "Neon"], ["MongoDB", "PostgreSQL"], ["MySQL", "PostgreSQL"],
  ["Redis", "Memcached"], ["Elasticsearch", "Algolia"], ["Algolia", "Meilisearch"],
  ["Dropbox", "Google Drive"], ["Google Drive", "OneDrive"], ["iCloud", "Google Drive"],
  ["1Password", "Bitwarden"], ["LastPass", "1Password"], ["Dashlane", "Bitwarden"],
  ["NordVPN", "ExpressVPN"], ["Surfshark", "NordVPN"], ["ProtonVPN", "Mullvad"],
  ["Proton Mail", "Tutanota"], ["Gmail", "Outlook"], ["Superhuman", "Spark Mail"],
  ["Calendly", "Cal.com"], ["Calendly", "SavvyCal"], ["TidyCal", "Calendly"],
  ["Todoist", "TickTick"], ["Things 3", "OmniFocus"], ["Reminders", "Todoist"],
  ["Bear", "Apple Notes"], ["Apple Notes", "Notion"], ["Craft", "Notion"],
  ["Spotify", "Apple Music"], ["YouTube Music", "Spotify"], ["Tidal", "Spotify"],
  ["Kindle", "Kobo"], ["Audible", "Spotify Audiobooks"], ["Goodreads", "StoryGraph"],
  ["Duolingo", "Babbel"], ["Anki", "Quizlet"], ["Khan Academy", "Coursera"],
  ["Coursera", "Udemy"], ["Udemy", "Skillshare"], ["Pluralsight", "Udemy"],
  ["Grammarly", "ProWritingAid"], ["Grammarly", "LanguageTool"], ["QuillBot", "Grammarly"],
  ["Hemingway", "Grammarly"], ["Surfer SEO", "Clearscope"], ["Ahrefs", "Semrush"],
  ["Semrush", "Moz"], ["Ubersuggest", "Ahrefs"], ["Screaming Frog", "Sitebulb"],
  ["Google Analytics", "Plausible"], ["Plausible", "Fathom"], ["Mixpanel", "Amplitude"],
  ["PostHog", "Mixpanel"], ["Hotjar", "Microsoft Clarity"], ["FullStory", "LogRocket"],
  ["Sentry", "Bugsnag"], ["Datadog", "New Relic"], ["Grafana", "Datadog"],
  ["Postman", "Insomnia"], ["Insomnia", "Bruno"], ["Hoppscotch", "Postman"],
  ["Docker", "Podman"], ["Kubernetes", "Docker Swarm"], ["Terraform", "Pulumi"],
  ["Ansible", "Chef"], ["Jenkins", "GitHub Actions"], ["CircleCI", "GitHub Actions"],
  ["Travis CI", "GitHub Actions"], ["npm", "yarn"], ["yarn", "pnpm"],
  ["npm", "bun"], ["Node.js", "Bun"], ["Node.js", "Deno"],
  ["React", "Vue"], ["React", "Svelte"], ["Vue", "Svelte"],
  ["Angular", "React"], ["SolidJS", "React"], ["Qwik", "React"],
  ["Next.js", "Remix"], ["Next.js", "Astro"], ["Astro", "Eleventy"],
  ["Gatsby", "Next.js"], ["Nuxt", "Next.js"], ["SvelteKit", "Next.js"],
  ["Tailwind CSS", "Bootstrap"], ["Tailwind CSS", "Chakra UI"], ["MUI", "Chakra UI"],
  ["Radix UI", "Headless UI"], ["shadcn/ui", "MUI"], ["Mantine", "Chakra UI"],
  ["Express", "Fastify"], ["Express", "Hono"], ["Hono", "Elysia"],
  ["NestJS", "Express"], ["Django", "Flask"], ["Flask", "FastAPI"],
  ["Rails", "Laravel"], ["Laravel", "Symfony"], ["Spring Boot", "Quarkus"],
  ["Go", "Rust"], ["Python", "JavaScript"], ["TypeScript", "JavaScript"],
  ["Kotlin", "Java"], ["Swift", "Objective-C"], ["Dart", "TypeScript"],
  ["Flutter", "React Native"], ["Flutter", "Ionic"], ["Expo", "React Native CLI"],
  ["Capacitor", "Cordova"], ["Tauri", "Electron"], ["Wails", "Electron"],
  ["Linux", "Windows"], ["macOS", "Windows"], ["Ubuntu", "Fedora"],
  ["Arch", "Debian"], ["Fish", "Zsh"], ["Bash", "Zsh"],
  ["tmux", "screen"], ["Alacritty", "iTerm2"], ["Warp", "iTerm2"],
];

const BLOG_TITLES = [
  "How to Choose the Right Productivity App in 2025",
  "A Practical Guide to JSON in Modern Web Development",
  "Why Regular Expressions Are Worth Learning",
  "The Hidden Cost of Switching Note-Taking Apps",
  "Five Browser Extensions That Save Hours Each Week",
  "What Makes a Good Online Tool, Anyway?",
  "Understanding Markdown: A Beginner's Guide",
  "Picking a Password Manager: What Actually Matters",
  "From CSV to Insight: A Quick Data Workflow",
  "When to Use a Static Site Generator",
  "The Case for Plain Text Notes",
  "A Short History of the Pomodoro Technique",
  "How Color Pickers Quietly Shape Modern Design",
  "Why Most QR Code Generators Are the Same",
  "Free vs Paid: Are Free Online Tools Worth It?",
  "How to Read DNS Records Like a Pro",
  "What Is Base64 and Why Should You Care",
  "Compressing Images Without Losing Quality",
  "How PDF Took Over the Workplace",
  "The Subtle Art of Naming Variables",
  "A Field Guide to Time Zone Conversions",
  "Building a Reading Habit That Sticks",
  "Why Designers Still Use Lorem Ipsum",
  "The Surprising Power of Cron Jobs",
  "An Honest Take on AI Writing Assistants",
  "What 'Plagiarism Checker' Actually Means",
  "How Search Engines Read Your Sitemap",
  "Choosing a CMS in 2025",
  "Why Self-Hosting Is Making a Comeback",
  "A Beginner's Tour of HTTP Status Codes",
  "Understanding HTTPS in Plain Language",
  "Inside the World of Unicode Characters",
  "How Hashing Keeps Your Passwords Safer",
  "The Quiet Renaissance of RSS",
  "Why Dark Mode Is More Than a Trend",
  "What Makes a Font Truly Readable",
  "Building a Personal Knowledge System",
  "How to Audit Your Own Website in an Hour",
  "Webhooks Explained Without the Jargon",
  "The Art of Writing a Good Bug Report",
  "How Spell Checkers Learn New Words",
  "A Practical Guide to Backups That Actually Work",
  "Why You Probably Need a Second Monitor",
  "What to Do When a Website Goes Down",
  "Understanding File Extensions You've Never Used",
  "The Quiet Evolution of the URL",
  "A Short Tour of Open Source Licenses",
  "Why Developers Love the Command Line",
  "How to Pick a Domain Name That Lasts",
  "What Browser Cookies Actually Do",
  "The Rise of Edge Computing, Explained",
  "Why Microservices Aren't Always the Answer",
  "Learning Git Without the Tears",
  "The Curious Case of the Favicon",
  "Why Forms Are Harder Than They Look",
  "Designing for Slow Internet Connections",
  "The Forgotten Joy of Bookmarks",
  "How Accessibility Improves UX for Everyone",
  "Why Reading Aloud Improves Your Writing",
  "A Quick Look at Headless CMS Platforms",
  "Why Email Will Outlive Most Apps",
  "The Surprising Math Behind UUIDs",
  "How to Use Search Operators Like a Pro",
  "What 'Privacy First' Really Means",
  "A Sane Approach to Notification Settings",
  "Building a Lightweight Web Stack in 2025",
  "Why Some Apps Feel Faster Than Others",
  "Understanding the Anatomy of a Modern Web Page",
  "How AI Is Changing Software Documentation",
  "The Underrated Skill of Asking Better Questions",
  "Why You Should Keep a Done List",
  "How to Run a Productive Weekly Review",
  "The Quiet Power of Default Settings",
  "How Browsers Decide Which Font to Use",
  "Why Your Phone Battery Drains Faster Over Time",
  "Understanding Why Software Bloats",
  "The Tools We Use Most and Notice Least",
  "Why Cross-Platform Apps Are Hard to Get Right",
  "An Easy Guide to Two-Factor Authentication",
  "Why Some Websites Refuse to Die",
  "How to Build a Habit Around Reading Code",
  "The Lost Art of Reading Documentation",
  "Why Code Reviews Are About People, Not Code",
  "What Makes a Good Changelog",
  "Why Naming Things Will Always Be Hard",
  "How Software Estimates Go Wrong",
  "The Underrated Power of Templates",
  "Why Spreadsheets Refuse to Die",
  "How to Write Better Commit Messages",
  "Why Plain HTML Is Still Underrated",
  "The Quiet Magic of Keyboard Shortcuts",
  "An Honest Look at No-Code Tools",
  "Why You Should Try Writing a Personal Wiki",
  "How to Pick Tools That Won't Trap You",
  "Why Software Should Respect Your Time",
  "The Case for Smaller, Slower Software",
  "What Makes a Great Onboarding Flow",
  "Why Most Settings Pages Are Awful",
  "A Tour of Underrated Productivity Habits",
  "Why Light Apps Win in the Long Run",
  "How to Build a Personal Knowledge Garden",
  "Understanding Why Apps Get Discontinued",
  "Why Bookmarks Bars Make You Faster",
  "Choosing the Right Browser in 2025",
  "Why Some Settings Should Be Hidden",
  "A Practical Guide to Digital Decluttering",
  "Why Default Apps Matter More Than You Think",
  "The Tiny Decisions That Define Great Software",
  "How to Spot a Truly Useful Web Tool",
  "Why Sharing Workflows Beats Sharing Tools",
  "The Quiet Comfort of Boring Software",
  "Why You Should Document Your Setup",
  "How to Build a Side Project That Outlives Your Interest",
  "Why Most 'Best Of' Lists Get It Wrong",
  "A Slow Guide to Faster Browsing",
];

// ---- Helpers ----
function slugify(s: string): string {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function hash(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick<T>(arr: T[], seed: number, n: number): T[] {
  const out: T[] = [];
  const used = new Set<number>();
  let s = seed || 1;
  while (out.length < n && used.size < arr.length) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const idx = s % arr.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(arr[idx]);
    }
  }
  return out;
}

// ---- Build the page index ----
const TOOL_PAGES: PageMeta[] = TOOL_TOPICS.map((t) => ({
  slug: slugify(t),
  kind: "tool" as const,
  title: `${t} — Free Online Tool`,
  description: `Use our free online ${t.toLowerCase()} to get fast, accurate results in your browser. No signup required.`,
  category: categorize(t),
}));

const COMPARE_PAGES: PageMeta[] = COMPARE_PAIRS.map(([a, b]) => ({
  slug: `${slugify(a)}-vs-${slugify(b)}`,
  kind: "compare" as const,
  title: `${a} vs ${b}: Which One Should You Pick?`,
  description: `An honest, side-by-side comparison of ${a} and ${b} covering features, pricing, performance, and the kind of person each is built for.`,
  category: "Comparisons",
}));

const BLOG_PAGES: PageMeta[] = BLOG_TITLES.map((t) => ({
  slug: slugify(t),
  kind: "blog" as const,
  title: t,
  description: `${t}. A thoughtful read covering practical takeaways, examples, and resources.`,
  category: "Blog",
}));

export const ALL_PAGES: PageMeta[] = [...TOOL_PAGES, ...COMPARE_PAGES, ...BLOG_PAGES];
export const TOOLS = TOOL_PAGES;
export const COMPARES = COMPARE_PAGES;
export const BLOGS = BLOG_PAGES;

function categorize(name: string): string {
  const n = name.toLowerCase();
  if (/(json|yaml|xml|sql|regex|jwt|base64|url|html|cron|markdown|diff|csv)/.test(n)) return "Developer";
  if (/(image|png|jpg|webp|pdf|gif|video|audio|mp3|wav|qr|barcode|favicon|logo|color|gradient)/.test(n)) return "Media & Design";
  if (/(seo|sitemap|robots|meta|open graph|schema|backlink|domain|whois|ping|dns|speed|mobile|redirect|status)/.test(n)) return "SEO & Web";
  if (/(word|text|character|case|reverse|lorem|grammar|paraphr|plagi|read|keyword|summar)/.test(n)) return "Writing & Text";
  if (/(calculator|converter|unit|time|date|age|bmi|tip|loan|mortgage|interest|currency)/.test(n)) return "Calculators";
  if (/(password|uuid|random|dice|coin|wheel|hash|md5|sha|bcrypt)/.test(n)) return "Security & Random";
  if (/(translate|speech|emoji|ascii|signature|invoice|resume|cover|cite|mla|apa|bib)/.test(n)) return "Productivity";
  return "Utilities";
}

// ---- Per-page content generation ----
export function relatedFor(slug: string, count = 8): PageMeta[] {
  const seed = hash(slug);
  const others = ALL_PAGES.filter((p) => p.slug !== slug);
  return pick(others, seed, count);
}

export function getPage(kind: PageKind, slug: string): PageMeta | undefined {
  return ALL_PAGES.find((p) => p.kind === kind && p.slug === slug);
}

// ---- Unique body content per page ----
const INTRO_TEMPLATES = [
  (t: string) => `${t} is one of those everyday utilities that quietly saves you time. This page walks through what it does, when to reach for it, and a few patterns that experienced users rely on.`,
  (t: string) => `If you've ever found yourself reaching for ${t} in the middle of a task, you already know the value of having a fast, no-friction version online. Here's a closer look at how to get the most out of it.`,
  (t: string) => `${t} sounds simple, and at its core it is — but a few well-chosen defaults and small features separate the good versions from the rest. We'll cover what to look for.`,
  (t: string) => `This guide to ${t} is written for people who want a quick result without reading a manual. We'll explain the basics, then share a couple of tips that take it further.`,
];

const SECTION_TEMPLATES = [
  (t: string, k: string) => ({ h: `What ${t} is good for`, p: `Most people use ${t} for small, repetitive tasks: cleaning up data, prepping content for another system, or checking that something looks right before sharing it. Because it runs entirely in the browser, you don't need to install anything or trust a desktop app with your files. The ${k} category in particular benefits from quick, low-friction tooling like this — the kind of thing you open in a tab, use for ten seconds, and close again.` }),
  (t: string) => ({ h: `How to use it`, p: `Paste or type your input into the editor, adjust any options that apply, and the result updates instantly. There's no submit button to click, no upload step, and nothing is sent to a server. If you make a mistake, undo works the way you'd expect. For longer inputs, the tool keeps up well — it's designed to stay responsive even with thousands of lines.` }),
  (t: string) => ({ h: `Common pitfalls`, p: `Two issues come up regularly with ${t}. The first is unexpected whitespace: leading or trailing spaces can change the output without being obvious. The second is character encoding — if your input came from a PDF or a Word document, hidden characters can sneak in. When something looks off, copy the input into a plain text editor first, then paste it back.` }),
  (t: string) => ({ h: `Tips from regular users`, p: `Power users tend to keep ${t} bookmarked in their browser toolbar, so it's one click away. Some chain it together with other utilities — running output from one tool directly into another — which is faster than it sounds once you've done it a few times. If you find yourself using ${t} more than once a day, a keyboard shortcut to your bookmark is worth setting up.` }),
  (t: string) => ({ h: `Why this version`, p: `There are dozens of ${t} pages on the web. This one focuses on staying out of your way: clean defaults, no popups, no account, and a layout that works on a phone as well as a laptop. The output panel is selectable and copyable with a single tap. That's it — nothing else to learn.` }),
];

const COMPARE_SECTIONS = [
  (a: string, b: string) => ({ h: `The short answer`, p: `Both ${a} and ${b} solve the same general problem, but they make different trade-offs. ${a} tends to feel more polished out of the box, with sensible defaults that work for most teams. ${b} gives you more control, which is great if you're willing to invest a weekend learning it but can feel like too much if you just want to get started.` }),
  (a: string, b: string) => ({ h: `Pricing and limits`, p: `${a} usually wins on the free tier — generous enough that solo users and small teams rarely outgrow it quickly. ${b}'s pricing is more linear, scaling up smoothly as you add seats, which is friendlier for medium-sized teams. Neither has surprise fees, and both offer annual discounts in the 15–20% range.` }),
  (a: string, b: string) => ({ h: `Performance in daily use`, p: `In day-to-day use, ${a} feels snappier on smaller workloads, while ${b} handles larger datasets and longer sessions more gracefully. On a slow connection, ${a} is the more forgiving choice; on a high-end laptop, the gap closes. Both have made noticeable performance improvements over the last year.` }),
  (a: string, b: string) => ({ h: `Integrations`, p: `${a} has a curated integration catalog: fewer options, but each one is well maintained. ${b} takes the opposite approach, with a sprawling marketplace where quality varies but you're more likely to find a connector for an obscure tool. If you live in a mainstream stack, either will cover your needs.` }),
  (a: string, b: string) => ({ h: `Which one is right for you`, p: `Pick ${a} if you value a clean, opinionated experience and want to get started in minutes. Pick ${b} if you want flexibility and don't mind investing time to set it up the way you like. Most people who try both end up staying with whichever one their team already uses — switching costs are real.` }),
];

const BLOG_PARAGRAPHS = [
  `There's a quiet trend in software lately: smaller, more focused tools instead of sprawling all-in-one suites. It's a welcome change, partly because the all-in-one approach often means each individual feature is just okay, and partly because smaller tools are easier to swap out when something better comes along.`,
  `The best advice for choosing a tool isn't to read every review you can find — it's to think honestly about how you actually work. The most popular option is rarely the best fit for any specific person; it's just the best fit on average.`,
  `One pattern shows up over and over in interviews with productive people: they spend more time on the tools they use most, and less time on the tools they use rarely. That sounds obvious, but most of us do the opposite, tinkering with the things we barely touch.`,
  `Free online tools have become a kind of public utility. They're not glamorous, but they smooth out a thousand small frictions in a typical workweek — the brief pauses when you need to convert something, check something, or generate something quickly.`,
  `Good defaults are underrated. A tool with thoughtful defaults can be useful within seconds; a tool with bad defaults makes you fiddle for ten minutes before you get anything done. Defaults are the first impression, and they say a lot about how the team behind a tool thinks.`,
  `Internal linking — the boring practice of making sure related pages link to each other — is one of those things that nobody notices when it's done well but everyone notices when it's missing. The same goes for navigation. Both deserve more thought than they usually get.`,
  `Software that respects your time tends to do a few small things: it loads quickly, it remembers your last setting, and it doesn't interrupt you to announce features you didn't ask about. The list is short, but you'd be surprised how many products miss at least one of these.`,
  `If you make a habit of bookmarking the small tools you actually use — not the ones you might use someday — your browser becomes a kind of personal workshop. It's a low-effort change with a surprisingly high payoff.`,
];

export interface PageContent {
  meta: PageMeta;
  intro: string;
  sections: { h: string; p: string }[];
  related: PageMeta[];
}

export function buildContent(meta: PageMeta): PageContent {
  const seed = hash(meta.slug);
  let intro = "";
  const sections: { h: string; p: string }[] = [];

  if (meta.kind === "tool") {
    const topic = meta.title.replace(/ — .*/, "");
    intro = INTRO_TEMPLATES[seed % INTRO_TEMPLATES.length](topic);
    // Use 4 of the 5 templates deterministically
    const order = [0, 1, 2, 3, 4].sort((x, y) => ((hash(meta.slug + x) % 1000) - (hash(meta.slug + y) % 1000)));
    for (const i of order.slice(0, 4)) {
      const tmpl = SECTION_TEMPLATES[i];
      sections.push(tmpl.length === 2 ? (tmpl as (t: string, k: string) => { h: string; p: string })(topic, meta.category) : (tmpl as (t: string) => { h: string; p: string })(topic));
    }
  } else if (meta.kind === "compare") {
    const m = meta.title.match(/^(.*) vs (.*?):/);
    const a = m?.[1] ?? "Option A";
    const b = m?.[2] ?? "Option B";
    intro = `${a} and ${b} both have loyal followings, and choosing between them isn't always easy. This comparison breaks down where each one shines, where each one falls short, and which type of user tends to be happiest with which.`;
    const order = [0, 1, 2, 3, 4].sort((x, y) => ((hash(meta.slug + x) % 1000) - (hash(meta.slug + y) % 1000)));
    for (const i of order) {
      sections.push(COMPARE_SECTIONS[i](a, b));
    }
  } else {
    intro = meta.title + ". " + BLOG_PARAGRAPHS[seed % BLOG_PARAGRAPHS.length];
    const order = [0, 1, 2, 3, 4, 5, 6, 7].sort((x, y) => ((hash(meta.slug + "b" + x) % 1000) - (hash(meta.slug + "b" + y) % 1000)));
    const subheads = ["The setup", "Why it matters", "A closer look", "What to try", "Where this leads"];
    for (let i = 0; i < 5; i++) {
      sections.push({ h: subheads[i], p: BLOG_PARAGRAPHS[order[i] % BLOG_PARAGRAPHS.length] });
    }
  }

  return {
    meta,
    intro,
    sections,
    related: relatedFor(meta.slug, 8),
  };
}

export function pathFor(p: PageMeta): string {
  if (p.kind === "tool") return `/tools/${p.slug}`;
  if (p.kind === "compare") return `/compare/${p.slug}`;
  return `/blog/${p.slug}`;
}

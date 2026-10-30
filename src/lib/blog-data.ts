export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string[];
  content: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "list"; items: string[] }
    | { type: "quote"; text: string }
  >;
  related: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-face-search-for-photographers",
    title: "AI Face Search for Photographers: How AI Makes Photo Delivery Faster",
    excerpt:
      "Discover how AI face search helps photography studios deliver event photos faster, streamline client selection, and create delightful gallery experiences.",
    category: "AI & Photography",
    date: "2026-09-27",
    readTime: "7 min read",
    image: "/images/photo-studio.jpg",
    keywords: [
      "selfie face search wedding photos India",
      "QR code wedding photo sharing",
      "WhatsApp photo delivery wedding guests",
      "how to deliver wedding photos to guests",
      "Kwikpic alternative India",
      "AI face search for photographers",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Photography teams can spend hours preparing and delivering large event galleries. The challenge does not end when editing is finished. Clients still need an easy way to find the photographs they care about. AI face search changes that part of the workflow by turning photo discovery into a much more direct experience.",
      },
      {
        type: "heading",
        text: "What is AI face search?",
      },
      {
        type: "paragraph",
        text:
          "AI face search uses computer vision to help identify photographs associated with a person's face. Instead of manually scrolling through hundreds or thousands of images, a client can use a selfie or face reference to discover relevant photographs.",
      },
      {
        type: "heading",
        text: "Why photographers are adopting smarter galleries",
      },
      {
        type: "list",
        items: [
          "Faster photo discovery for clients",
          "Less manual searching through large galleries",
          "A better mobile-first delivery experience",
          "More opportunities for clients to discover additional photographs",
          "A smoother workflow between studio, photographer and client",
        ],
      },
      {
        type: "heading",
        text: "AI should improve the workflow, not replace the photographer",
      },
      {
        type: "paragraph",
        text:
          "The best use of AI in photography is practical: reduce repetitive work while keeping creative control with the photographer. AI can help clients find photographs faster while the studio continues to control editing, delivery, branding and client relationships.",
      },
      {
        type: "quote",
        text:
          "The goal is simple: spend less time searching and more time creating.",
      },
      {
        type: "heading",
        text: "Building an AI-ready photography workflow",
      },
      {
        type: "paragraph",
        text:
          "An efficient workflow connects galleries, client communication, photo discovery and delivery. PhotoOS brings these workflows together so studios can manage the business side of photography while clients get a simpler way to interact with their photographs.",
      },
      {
        type: "heading",
        text: "Final thoughts",
      },
      {
        type: "paragraph",
        text:
          "AI face search is one part of a larger shift toward intelligent photography management. When it is combined with client galleries, collaboration tools and mobile experiences, it can make photo delivery considerably easier to navigate.",
      },
    ],
    related: [
      "photography-client-gallery-guide",
      "photography-crm-guide",
    ],
  },

  {
    slug: "photography-client-gallery-guide",
    title: "How to Build a Better Client Gallery Experience for Your Photography Business",
    excerpt:
      "A practical guide to creating photography client galleries that are fast, mobile-friendly, beautifully branded, and built around the client experience.",
    category: "Client Experience",
    date: "2026-09-27",
    readTime: "6 min read",
    image: "/images/client-collaboration.jpg",
    keywords: [
      "photo selection software for wedding album",
      "how to deliver wedding photos to guests",
      "Pixieset alternative India",
      "Pic-Time alternative India",
      "photography client gallery",
      "client photo delivery",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "A client gallery is more than a folder of finished photographs. It is one of the most visible parts of a photography studio's customer experience. The gallery should make it easy for clients to view, discover, select and share their photographs.",
      },
      {
        type: "heading",
        text: "Start with the client journey",
      },
      {
        type: "paragraph",
        text:
          "Think about what happens after the studio sends a gallery link. The client may open it on a phone, search for specific people, review hundreds of photographs, share the gallery with family and return several times. Every step should feel straightforward.",
      },
      {
        type: "heading",
        text: "Five elements of a strong client gallery",
      },
      {
        type: "list",
        items: [
          "Fast loading on mobile devices",
          "Simple navigation and clear album structure",
          "Easy photo discovery",
          "Secure sharing and controlled access",
          "Clear communication between the client and studio",
        ],
      },
      {
        type: "heading",
        text: "Make large galleries easier to explore",
      },
      {
        type: "paragraph",
        text:
          "Large wedding and event galleries can contain hundreds or thousands of images. Search, filters and AI-assisted discovery can dramatically reduce the effort required to find specific photographs.",
      },
      {
        type: "heading",
        text: "Connect gallery delivery with client collaboration",
      },
      {
        type: "paragraph",
        text:
          "Modern photography workflows benefit when clients can comment, review and communicate directly around their photographs. This reduces scattered conversations and keeps project context connected to the gallery.",
      },
      {
        type: "heading",
        text: "Use your gallery as part of your brand",
      },
      {
        type: "paragraph",
        text:
          "The gallery is another customer touchpoint. Consistent branding, professional presentation and a smooth mobile experience can make the final delivery feel like part of the studio's service rather than a generic file transfer.",
      },
      {
        type: "heading",
        text: "Final thoughts",
      },
      {
        type: "paragraph",
        text:
          "A better gallery does not simply deliver photographs. It makes the entire post-production experience easier for both the studio and the client.",
      },
    ],
    related: [
      "ai-face-search-for-photographers",
      "photography-client-app",
    ],
  },

  {
    slug: "photography-crm-guide",
    title: "Photography CRM: The Complete Guide to Managing Clients, Events and Deliveries",
    excerpt:
      "Learn what a photography CRM should manage, from lead capture and client booking to smart galleries, proofing, team communication, and automated delivery.",
    category: "Studio Management",
    date: "2026-09-27",
    readTime: "8 min read",
    image: "/images/photo-editing.jpg",
    keywords: [
      "wedding photographer CRM India",
      "photography studio management software India",
      "FotoOwl alternative India",
      "photography CRM",
      "photography business management",
      "studio CRM",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Running a photography business involves much more than taking and editing photographs. Studios manage inquiries, clients, events, payments, teams, galleries, communication and delivery. A photography CRM brings these operational workflows into one connected system.",
      },
      {
        type: "heading",
        text: "What is a photography CRM?",
      },
      {
        type: "paragraph",
        text:
          "A photography CRM is software designed around the specific workflow of photographers and studios. Instead of using disconnected spreadsheets, messaging apps and file folders, a studio can organize customer and event information in one place.",
      },
      {
        type: "heading",
        text: "Core features a photography CRM should include",
      },
      {
        type: "list",
        items: [
          "Client and contact management",
          "Event and project management",
          "Album and gallery organization",
          "Team and role management",
          "Client communication",
          "Photo delivery workflows",
          "Business and subscription management",
        ],
      },
      {
        type: "heading",
        text: "Why connected workflows matter",
      },
      {
        type: "paragraph",
        text:
          "When business information is spread across multiple systems, teams spend time searching for context. A connected CRM reduces that friction by keeping clients, events and delivery workflows linked.",
      },
      {
        type: "heading",
        text: "CRM plus AI",
      },
      {
        type: "paragraph",
        text:
          "The next generation of photography management combines traditional CRM capabilities with AI-assisted workflows. Face search, intelligent discovery and automation can help studios reduce repetitive tasks while keeping the client relationship central.",
      },
      {
        type: "heading",
        text: "Choosing the right photography CRM",
      },
      {
        type: "list",
        items: [
          "Check whether it supports your complete workflow",
          "Evaluate the client experience, not only the admin dashboard",
          "Look for mobile-friendly delivery",
          "Understand storage and user limits",
          "Check security, access control and privacy practices",
          "Consider how easily your team can adopt it",
        ],
      },
      {
        type: "heading",
        text: "Final thoughts",
      },
      {
        type: "paragraph",
        text:
          "The right photography CRM should make the studio easier to operate while making the client experience easier to understand. That is the direction PhotoOS is designed around.",
      },
    ],
    related: [
      "photography-client-gallery-guide",
      "photography-business-marketing",
    ],
  },

  {
    slug: "photography-client-app",
    title: "How a Mobile Photography Client App Improves the Client Experience",
    excerpt:
      "Discover why mobile-first photo delivery, digital client galleries, AI face search, and instant communication transform modern photography client journeys.",
    category: "Mobile & Client Experience",
    date: "2026-09-27",
    readTime: "6 min read",
    image: "/images/photoos-client-app-home.png",
    keywords: [
      "WhatsApp photo delivery wedding guests",
      "QR code wedding photo sharing",
      "PhotoOS app",
      "selfie face search wedding photos India",
      "photography client app",
      "mobile photography gallery",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Clients increasingly experience photography services through their phones. From receiving gallery notifications to viewing event photographs and communicating with the studio, the mobile experience can influence how professional the entire service feels.",
      },
      {
        type: "heading",
        text: "Why mobile matters for photography businesses",
      },
      {
        type: "paragraph",
        text:
          "A mobile-first experience removes unnecessary friction. Clients should be able to access their galleries, discover photographs and stay connected with their photographer without depending on a desktop computer.",
      },
      {
        type: "heading",
        text: "What clients expect from a photography app",
      },
      {
        type: "list",
        items: [
          "Simple sign-in",
          "Fast access to galleries",
          "Mobile-friendly photo viewing",
          "Easy photo discovery",
          "Clear communication",
          "A consistent and professional interface",
        ],
      },
      {
        type: "heading",
        text: "Mobile plus AI-powered discovery",
      },
      {
        type: "paragraph",
        text:
          "A mobile app becomes even more useful when clients can use intelligent photo discovery. Instead of navigating a huge gallery manually, clients can use tools such as selfie-based discovery where available.",
      },
      {
        type: "heading",
        text: "The studio benefits too",
      },
      {
        type: "paragraph",
        text:
          "A connected client app can reduce repetitive support questions, centralize communication and keep clients connected to the studio after the event.",
      },
      {
        type: "heading",
        text: "Final thoughts",
      },
      {
        type: "paragraph",
        text:
          "The best client app does not try to replace the photographer. It makes the relationship between photographer, studio and client easier to manage.",
      },
    ],
    related: [
      "photography-client-gallery-guide",
      "ai-face-search-for-photographers",
    ],
  },

  {
    slug: "photography-business-marketing",
    title: "Photography Business Marketing: How to Turn Client Galleries Into More Bookings",
    excerpt:
      "Learn photography marketing strategies for turning client gallery experiences, social referrals, and AI workflows into predictable studio business growth.",
    category: "Marketing",
    date: "2026-09-27",
    readTime: "8 min read",
    image: "/images/hero-wedding.jpg",
    keywords: [
      "photography software Maharashtra",
      "photography software Kolhapur",
      "photographer marketplace India",
      "PhotoOS photography",
      "how to market a photography business",
      "photographer lead generation",
    ],
    content: [
      {
        type: "paragraph",
        text:
          "Marketing a photography business is not only about running advertisements. Every event, gallery, client interaction and delivered photograph can become part of a studio's marketing system.",
      },
      {
        type: "heading",
        text: "Start with the client experience",
      },
      {
        type: "paragraph",
        text:
          "A smooth client experience creates more opportunities for referrals. When clients can easily access photographs, share them and stay connected with the studio, the work can naturally reach more people.",
      },
      {
        type: "heading",
        text: "Turn galleries into referral touchpoints",
      },
      {
        type: "list",
        items: [
          "Use consistent studio branding",
          "Make sharing simple",
          "Keep your studio contact information accessible",
          "Create clear calls to action",
          "Make the mobile experience easy",
        ],
      },
      {
        type: "heading",
        text: "Build content around real photography problems",
      },
      {
        type: "paragraph",
        text:
          "Useful educational content can attract photographers, clients and people researching photography services. Topics such as client galleries, event workflows, AI photo search and studio management can build a long-term content library.",
      },
      {
        type: "heading",
        text: "Use internal links strategically",
      },
      {
        type: "paragraph",
        text:
          "A strong blog should work as a connected topic cluster. Articles about AI photo search can link to client galleries, CRM workflows and mobile apps. This helps readers discover related information and creates a clearer site structure.",
      },
      {
        type: "heading",
        text: "Build genuine backlinks",
      },
      {
        type: "paragraph",
        text:
          "Backlinks should come from real relationships and useful content. Photography associations, educational websites, software directories, partner studios, interviews, guest articles and relevant industry publications can become potential sources when the content genuinely deserves a reference.",
      },
      {
        type: "heading",
        text: "Final thoughts",
      },
      {
        type: "paragraph",
        text:
          "The strongest photography marketing systems connect content, client experience, referrals and business operations instead of treating every channel as a separate activity.",
      },
    ],
    related: [
      "photography-crm-guide",
      "photography-client-gallery-guide",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

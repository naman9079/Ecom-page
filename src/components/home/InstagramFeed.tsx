import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const InstagramFeed = () => {
  // Replace with your actual Instagram handle
  const instagramHandle = "daecom";
  const instagramUrl = `https://www.instagram.com/${instagramHandle}`;

  // Mock Instagram posts - replace with actual posts or use Instagram API
  const instagramPosts = [
    {
      id: 1,
      image: "/logo/logo.jpg?v=20260317",
      caption: "Empowering ecommerce brands",
      likes: 245,
    },
    {
      id: 2,
      image: "/logo/logo.jpg?v=20260317",
      caption: "Digital marketing excellence",
      likes: 189,
    },
    {
      id: 3,
      image: "/logo/logo.jpg?v=20260317",
      caption: "Marketplace growth strategies",
      likes: 312,
    },
    {
      id: 4,
      image: "/logo/logo.jpg?v=20260317",
      caption: "Social media success",
      likes: 276,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest projects, tips, and behind-the-scenes content
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Visit our Instagram profile"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @{instagramHandle}
            </a>
          </Button>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block relative aspect-square"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium line-clamp-2">
                      {post.caption}
                    </p>
                    <p className="text-xs mt-1 flex items-center gap-1">
                      <Instagram className="w-3 h-3" />
                      {post.likes} likes
                    </p>
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>

        {/* Instagram Embed Script Alternative */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            For more updates, follow us on{" "}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary hover:underline font-medium"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

# Blog Posts

This directory contains all blog posts as markdown files with frontmatter.

## Creating a New Blog Post

1. Create a new `.md` file in this directory (e.g., `my-new-post.md`)
2. Add frontmatter at the top of the file between `---` delimiters
3. Write your content in markdown below the frontmatter

## Frontmatter Format

```yaml
---
id: my-new-post
title: My New Blog Post
excerpt: A brief description of the post
publishedAt: '2025-01-20'
tags:
  - Tag1
  - Tag2
  - Tag3
readTime: 5
featured: false
status: published
author:
  name: Jason Hand
  avatar: /images/Jhand_AI_Profile.png
---

Your markdown content goes here...
```

## Frontmatter Fields

- **id** (required): Unique identifier for the post (usually matches filename without .md)
- **title** (required): The post title
- **excerpt** (required): Short description/excerpt
- **publishedAt** (required): Publication date in YYYY-MM-DD format
- **updatedAt** (optional): Last update date in YYYY-MM-DD format
- **tags** (required): Array of tag strings
- **readTime** (optional): Estimated read time in minutes (auto-calculated if not provided)
- **featured** (optional): Boolean, whether to feature this post (default: false)
- **status** (optional): Either 'published' or 'draft' (default: 'published')
- **author** (optional): Author object with name and optional avatar (defaults to Jason Hand)

## Example

See `ten-years-community-pulse.md` for a complete example.

---
id: if_your_platform_roadmap_feels_certain_its_probably_lying
title: "If Your Platform Roadmap Feels Certain, It’s Probably Lying"
description: "Internal developer platform roadmaps should be treated as evidence-seeking experiments, not borrowed certainties disguised as strategy."
Tags: ["eBPF", "Kernel", "Security", "Infra", "ChatGPT", "Copilot"]
Summary: "A casual, high-level reflection on why internal developer platform roadmaps should be treated as experiments: replace borrowed certainty with measurable learning, instrument before building, define success and failure, and reduce epistemic debt by actively seeking disconfirming evidence."
Author: Jason Hand (bot)
Date: 2026-01-16T15:09:00.000Z
status: draft
---

<img src={frontmatter.HeroImg} />

Platform teams love a confident roadmap. It looks tidy. It feels professional. It gives everyone something to point at when leadership asks, “So what are we doing next quarter?”

But here’s the uncomfortable truth: if your internal developer platform roadmap feels certain, it’s lying.

A roadmap is not a promise. It is a guess wearing a suit.

Most platform roadmaps are built from “best practice” stories we picked up from peers, vendors, conference talks, or even fluent outputs from artificial intelligence. Those stories can be useful… but they arrive preloaded with someone else’s context and someone else’s blind spots. When we treat those borrowed sequences as inevitable, we stop doing product work and start doing delivery theater.

The pattern is predictable:

- A roadmap item begins as a plausible belief: “Self service will reduce tickets,” or “Golden paths will speed delivery,” or “A maturity model will tell us what to do next.”
- The belief hardens into certainty.
- Research becomes confirmatory. Metrics become decorative.
- We ship.
- And then we move on without seriously checking whether developer flow improved or whether we quietly added new friction.

That is how teams build epistemic debt: a backlog of untested assumptions that makes a platform look mature while staying fragile and low impact.

The antidote is surprisingly simple, but it requires humility.

Turn every roadmap item into an experiment.

Instrument before you build. Write down what success looks like and what failure looks like. Be explicit about the mechanism: *how* is this change supposed to reduce friction? Then ship and do the part most teams skip: actually check.

Not just “Did we deliver it?” but “Did it help?”

Also: go hunting for evidence that proves you wrong. Look for signals like higher cognitive load, increased workarounds, slower onboarding, or new bottlenecks that shift work instead of removing it. When a belief fails, retire it publicly. That is not embarrassment; that is progress.

A good internal developer platform roadmap earns certainty briefly and surrenders it often. The real output of delivery is not features. It is measurable learning.

These ideas were sparked by *The Traps of Borrowed Internal Developer Platform Roadmap Certainty* by Russ Miles. If this hit a nerve, it’s worth a read.

Check out the full article by Russ Miles at https://russmiles.substack.com/p/the-traps-of-borrowed-internal-developer

Jason
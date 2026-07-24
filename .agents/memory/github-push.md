---
name: GitHub push authorization
description: GitHub push setup for this workspace.
---

Adding an HTTPS GitHub origin is not sufficient by itself; pushes require the current Replit identity to have a linked GitHub authorization, and a mismatched identity can cause credential lookup to fail.

**Why:** A push to the configured NorthPeak repository was rejected because no GitHub credentials matched the current Replit identity.

**How to apply:** Have the user connect the correct GitHub account from the Git pane before retrying `gitPush`.
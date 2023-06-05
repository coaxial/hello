---
layout: post
published: true
slug: scheduled-action
title: "How I'm using GitHub Actions to avoid stale data on this website"
intro: >-
  In this post, I'm showing how I leverage a scheduled GitHub Action to
  automatically rebuild this website just after New Year's Day and avoid stale
  dates.
---

## The problem

Some of the data on this website (like the current year in the footer) must be
updated every time the year changes. However, this site is statically generated
using [Jekyll](https://jekyllrb.com/) which means everything is hard-coded in
the generated HTML.

Every year after the new year, I have to remember and manually trigger a
rebuild to refresh the current year. This is easy to forget and makes it look
like the site isn't actively maintained anymore, showing an outdated year in
the meantime.

I used to use JavaScript to [dynamically insert the current
year](https://github.com/coaxial/hello/blob/2e31b520c486f577719f69fed1bced99f3552e65/_includes/footer.html#L4)
after the page has loaded but never loved this solution: it's overkill, impacts
the performance ever so slightly, and results in a slightly lesser experience
for users not running JavaScript.

## The solution: automate it!

In my opinion, if something can be automated then it should be: it's one less
thing to forget doing.

GitHub Actions offers scheduled builds which basically function like a hosted
cron job. It's rather burried in the documentation (in my opinion), but it's
there: [trigger via
schedule](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule).

The idea is to create an action that will run every 1st of January at 00:01 and
`curl` a webhook which will trigger a rebuild.

### Netlify build hook

On the Netlify side, I'm using a custom [build
hook](https://docs.netlify.com/configure-builds/build-hooks/). Because the UI
might change over time, please refer to the [documentation](https://docs.netlify.com/configure-builds/build-hooks/) on exactly how to
proceed.

### Keeping the hook ID secret

Although I can't think of anything truly damaging that could happen from
triggering a rebuild, I prefer to err on the side of caution and not make the
hook public.

[Action
secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
exist for this purpose, so I've put the hook ID into a secret
which I can refer to in the action.

Since my action will `curl [...] https://<my hook>`, it will show the full hook
in the logs including the ID that I'm trying to keep secret. Fortunately, I can
use a
[mask](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#masking-a-value-in-a-log)
and hide it anyway.

### The `cron` string

Using [crontab.guru](https://crontab.guru/#1_0_1_1_*), I came up with the
string `1 0 1 1 *` to run the action every 1st of January of every year at
00:01.

### Giving the build a meaningful title

It's possible to [pass an optional build
title](https://docs.netlify.com/configure-builds/build-hooks/#parameters) when
calling the webhook, which will show in the Netlify UI. I'm titling this
"Yearly scheduled rebuild" so that it's clear what triggered the build and I
won't be scratching my head in a few months wondering what happened.

### The action

Combining all the above, this is what I get:

{% raw %}

```yaml
# .github/workflows/yearly.yml

name: Update current year on pages

on:
  schedule:
    # On *-01-01 00:01, see https://crontab.guru/#1_0_1_1_*
    - cron: 1 0 1 1 *

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Mask hook ID in logs
        run: |
          echo "::add-mask::${{ secrets.NETLIFY_REBUILD_HOOK_ID }}"
      - name: Trigger site rebuild
        run: |
          curl -X POST -d '{}' https://api.netlify.com/build_hooks/${{ secrets.NETLIFY_REBUILD_HOOK_ID }}?trigger_title=Yearly+scheduled+rebuild
```

{% endraw %}

## Conclusion

And there we have it, an action that will rebuild the site every year just
after the new year so that everything stays up to date, automatically, and
without my ever thinking about it again.

Scheduled actions can also be useful to regularly build projects and run smoke
tests, automatically close stale issues, generate reports...

If you'd like to explore how automation can save you and your team time
building software, [send me a message](/say_hi).

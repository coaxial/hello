---
layout: post
published: true
slug: knives
title: "A better analogy for technical debt: dull knives"
intro: >-
  Conveying the importance of remediating technical debt to non-technical
  people and managers is often a challenge. I think part of the difficulty
  comes from the name: let's consider a better name for it instead.
---

## Why is debt a bad analogy

This may sound familiar if you've worked in (or led) a technical team: there is
too much technical debt and much time is spent plugging the leaks or putting
out fires rather than on work that delivers value to customers. And yet, there
is no way to get time allocated for addressing the root causes as the show must
go on.

That situation is more prevalent in organizations where the business and sales
teams have more influence than engineering on the product's roadmap.

### Carrying debt is normal and predictable for a business

Debt (within reason) is an acceptable way of doing business. It's simply a cost
effective way to keep going while not having enough revenue or cash flow to
sustain the business. It is clear how much the debt costs, and whether it can
be repaid or serviced over time.

None of this applies to code. Technical debt is notoriously hard to measure,
let alone quantify its servicing cost. It isn't possible to plug a rate into a
spreadsheet and calculate that new work will take 5 or 10% longer to deliver
because of technical debt: nobody knows the interest rate at the time when the
debt is taken on. Only that there is bad technical debt and worse technical
debt.

What is predictable about technical debt is that a change that would normally
take a few days to implement becomes a multi-week effort.

### In business, debt is leverage and a growth tool

When a business needs to acquire an asset that costs more capital than it can
spend at once, debt is a great tool to do so. Because the asset is an
investment and will generate more money than it costs over time, there will be
enough cash flow to service and pay the debt off.

While using monetary debt to pay for a (code or physical) machine is an
investment, paying for that code machine with _technical_ debt carries a subtle
but sizeable difference.

Financing code with technical debt is more like using debt to buy a barely
functional machine that regularly breaks down, making it more and more
expensive to just keep running over time. This hardly qualifies as an
investment: that kind of asset will have a very hard time delivering enough
value to cover its ongoing costs, never mind the interest on top.

### Interest expense is tax deductible[^0]

The cost of borrowing money is considered a business expense from a tax
standpoint. It is deductible from revenues, which lowers the tax burden.

Technical debt, just like monetary debt, carries ongoing costs such as longer
iteration times, more bugs and downtime in production, difficulty or
impossibility to implement particular features, difficulty to recruit and
retain talent, customer churn, less prestigious image, etc…

On an instinctive level "debt cost = tax deductible" which makes technical debt
even more pernicious: there are no tax deductions for it and the business has
to carry its full cost.

### Debt doesn't cause injuries

Another hidden cost and consequence of technical debt are that, unlike its
monetary counterpart, it wears people out. There are very few things more
soul-sucking to engineers[^1] than dealing with unchecked and unmitigated
technical debt: adding a simple button to the UI is normally a trivial task.
But in high technical debt environments, this can take days or weeks slogging
through unrelated issues while being pressured to deliver. Given enough time,
this leads to cynicism, apathy, burnout, and psychological damage in general.
Engineers like to build well-thought-out things and fix things that aren't.
When we aren't allowed to do either for long enough, we start down a slippery
slope that leaves individuals and the business worse and worse off.

## A better analogy: knives

I think a better way to illustrate technical debt is knives. Here is why.

### Sharp knives are safer knives

When using dull knives, more pressure must be applied to cut into anything.
This means the knife is more likely to slip and injure because of the extra
force. Think about the last time you tried to slice a tomato with a dull knife.

With a sharp knife, barely any pressure is needed to start a cut. The resulting
cut is neat, straight, and accurate. There is less risk of slipping off since
very little pressure is required, and if the blade touches the hand the
resulting cut is likely not as deep. It's also neater so there is less trauma
around the cut, which allows it to heal faster: think about how sharp a
surgeon's scalpels are.

### Get duller with use

The more a knife is used, the duller the blade gets. How fast this happens also
depends on the blade's quality, but this is overall a universal phenomenon.

Code is similar: the more a piece of code gets modified, the duller it can get:
sound software engineering principles start to erode, functions get more and
more concerns added to them, tests aren't updated and coverage drops,
duplication crops up... The code isn't as "sharp" anymore.

### Require regular care

To keep the blade sharp and the knife performing well, regular maintenance is
required. It must be cleaned after each use, used on appropriate cutting
surfaces, kept dry (and oiled, for some), and sharpened at regular intervals.
If done on a schedule, or at least regularly enough, these steps don't take
much time. But if too much time (and damage) has occured between maintenance,
it will take much more time and effort to remedy. In some cases, it might not
even be salvageable anymore.

Code also requires regular care and maintenance. Dependencies have to be
upgraded as new versions and vulnerabilities are published. Functions have to
be refactored and broken down as functionality is added to them. Automated
tests must be updated and expanded.

As with knives, the longer the interval between maintenance the more work it is
to do and the less likely it is to get done. Which in turn makes the problem
even worse.

### Most used knives should be kept sharpest

In an ideal world, every knife in the kitchen would be sharp and the whole
codebase would be in top shape. In the real world, however, there is only a
finite amount of resources available and trade-offs are inevitable.

I would argue that the more a knife gets used, the sharpest it should be kept.
This prioritizes maintenance and care work where it will pay off the most. And
so it goes for code too, the paths and functions that are used the most should
be the ones kept in the best condition. It makes problems less likely and
easier to fix when they occur. It keeps engineers working efficiently because
it's less effort to work with that code.

## Conclusion

Using the sharp knife/dull knife analogy rather than technical debt to plan for
and maintain codebases is much closer to reality, in my opinion. It is a more
tangible analogy, speaks to everyone in the business whether they have a
financial background or an engineering background, and leads to better
strategic decisions.

I encourage you to switch to the knife analogy and away from technical debt the
next time the topic of code maintenance comes up and make the case as to why
it's more appropriate: you might even get time and resources allocated to
sharpen the code then!

[^0]:
    This isn't financial advice, I am not an accountant and don't even play
    one on TV. You should consult a licensed professional to advise on your
    specific circumstances.

[^1]:
    And probably other functions as well, but I can only confidently talk
    about what I have the most experience with: engineering.

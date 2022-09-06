---
layout: post
published: false
title: "Greener software is better software"
intro: >-
  This post was inspired by Asim Hussain's [Principles.Green](https://principles.green) personal project and website, along with current events.
---

The energy crisis following Russia's illegal invasion of Ukraine gave the world
a wake-up call regarding its energy use (and waste.) This winter is shaping up
to be challenging in terms of energy supply, with some operators and countries
considering rolling blackouts or shutdown mandates.

As software engineers, architects, and managers, we can do our part to ensure
the software we produce is more energy efficient: it's better for the climate,
the users, the bottom line, and the engineers (in no particular order!)

## Why greener is better

### It makes financial sense

A good proxy for gauging carbon emissions is energy and resource use.
Generally speaking, using more electricity and more hardware is correlated with
dirtier software and higher emissions. By building greener software, the
business also reduces its electricity, bandwidth, server, and hosting bills.

### It can lead to a better user experience (UX)

Less demanding software runs better on recent hardware and on more (older)
hardware by requiring less computation. Have you ever noticed how fast static
websites with little to no JavaScript (like this one) load compared to SPAs?
This is because HTML, CSS, and a sprinkle of JavaScript are much easier to
process and render, using less energy.

Optimizing software to reduce its carbon footprint yields better UX, as long as
the UX designers are involved early and make the right tradeoffs: less
computationally intensive doesn't mean bare bones!

### It requires collecting metrics which are also useful for business decisions

Every optimization will help reduce emissions, but focusing on the wrong one
isn't the most impactful way to go. Without metrics and application profiling,
the engineering team will be missing out on areas that need optimization the
most and spend time on marginal improvements instead.

Once metrics exist, the business can also use them to better inform business
decision and future decisions.

Designing software to report metrics encourages a more modular and flexible
architecture which will be easier to maintain and extend for the lifetime of
the software (just like automated testing as a requirement does, I might write
a post on that topic in the future.)

Having metrics also opens the road to monitoring, which is a significant
contributor to better quality software.

## How to build greener software?

### Use hardware longer

Producing anything involves emissions, hardware is no exception. Once it has
been produced, the carbon has been emitted whether the hardware is used for a
couple of years only or longer; producing its replacement also emits carbon.

If hardware is replaced later, emissions are reduced: a 2019 Dell R640 server
costs 1290 kg of CO₂ equivalent (kgCO₂e) to produce[0]. Replacing it after four
years (Dell's estimated product lifetime[1]) would have cost 323 kgCO₂e/year.
But if replaced a year later, this number drops to 258 kgCO₂e/year.

### Sell decommissioned hardware instead of destroying/recycling it

Hardware that the organization doesn't need anymore can be useful to other
businesses or individuals. Almost every business I've worked with threw away
vast quantities of 4–5 years old laptops, servers, monitors, furniture… Sending
it to the recycler still means it will be destroyed (in most cases) rather than
turned into a brand new item, and a fraction only of its materials will be
recovered; the rest becoming e-waste.

Instead, it might be worthwhile to pull the storage from it (which can be
safely destroyed, or better yet safely erased) and sell the hardware. If the
logistical burden on the organization is too much, donate the hardware to a
local user group, or the friendly neighbourhood hackerspace. There are also
companies specializing in collecting, refurbishing, and reselling
decommissioned hardware as a service.

There might be tax implications to selling depreciated assets, but there are
also ways around it; check with a CPA as this depends on your jurisdiction. The
equipment could also be donated instead of sold, which can yield a tax benefit.

### Use a smaller number of bigger servers, and keep them busier

In a nutshell, power use doesn't scale linearly with utilization: powering any
server takes a nominal amount of electricity just so that the machine is on and
ready to work. So, to do nothing (0% utilization), an example server would use
250W. At 50% utilization, that same server might use 280W; and to run a 100%
load it might use 295W.

Thus, reducing the number of individual machines and consolidating their load
onto larger machines to make them busier will use less power overall. To
further optimize power usage, CPUs could be made to run slower off-peak load
hours. This is where the metrics collection facilities mentioned earlier are
also useful.

### Have an "eco" mode toggle for your applications

Similar to how appliances have an "eco" program or mode that makes trade-offs
between resource use and performance or time, software could also have an "eco"
mode. Every major OS has a way to adjust computer or smartphone performance to
reduce energy use (and prolong battery life).

As far as I know, this is a largely untapped area for SaaS or local software: I
don't know of any application or web app that lets me adjust performance to
reduce resource use directly. Most SaaS will offer different tiers but they're
about market segmentation and revenue optimization, not directly to reduce
carbon emissions. One could also imagine a monthly discount based on how much
time was the web app running in "eco" mode as it would translate to lower
variable costs for the provider.

The toggling could also be automated so that the application runs in "eco"
mode during periods of peak dirty electricity generation and in performance
mode during clean energy surpluses.

### Shift computation to locations and/or times where there is a surplus of electricity

Along with having an "eco" mode, software could be architected to run its
heavier computations at times and in locations where there is a surplus of
clean energy, as it's not always necessary to run computations at the nearest
edge and instantly. The goal is to take advantage of a clean energy surplus as
it can't easily be stored for later use, contrary to computation results which
can be saved and recalled later.

### Send less data over shorter distances, reusing connections

Moving data around incurs a carbon cost, both in electricity to send the
packets but also in the extra hardware required for the extra traffic. By
sending less data over shorter distances, not only is less carbon required for
transmission, but it also reduces the hardware requirements to accommodate the
traffic. And it results in less data to process for the client, which might
also reduce power usage.

Applications might also optimize their connections and keep them open longer
rather than closing them each time. This reduces the number of handshakes
required, resulting in lower traffic and computation requirements.

Reducing network use might sound contradictory to computation shifting, and it
is. Each organization should consider the tradeoffs of each strategy and decide
on the best mix for their use case.

### Make application performance a core requirement

A performant application is an optimized application. And an optimized
application uses fewer resources to achieve similar or better results than its
unoptimized equivalent. Having application performance as a core requirement
will yield lower carbon emissions (and higher quality software overall).

Depending on the current organizational culture, this will require more or less
effort but it will organically enable most of the other techniques mentioned
in this post.

## Beyond software

While this post mostly focused on software architecture and hardware so far,
there are things organizations can do beyond software that contribute to
reducing overall emissions; setting an overall tone and philosophy for the way
an organization is doing business.

### Individual incentives and benefits

Incentives through benefits are a financially efficient way to increase
compensation and attract candidates, so why not encourage individuals to make
greener choices? Organizations can subsidize the cost of better transportation
choices (buying and using a bicycle or using public transit instead of
driving), implement partnerships with power companies for a discounted cleaner
energy rate at home, incite repair and reuse of company equipment, reduce meat
and fish consumption, consume locally produced foods…

### Power offices and data centers with cleaner energy

Most utility companies offer cleaner energy plans, so why not switch offices
and data centers to these instead? It's usually rather straightforward and
encourages utilities to build even more renewable energy generation capacity.

### Green roofs, rooftop beehives and food gardens, solar panels…

A step further than switching to clean energy is generating it. Solar panels
are subsidized in many municipalities and pay for themselves rapidly.
Efficiency has drastically improved over the last few years, and the cost has
gone down dramatically.

Rooftop food gardens, bee hives, rainwater collection systems, or simply
covering in grass will reduce the business' carbon output, mitigate urban heat,
and help biodiversity. Organizations can use services that specialize in
looking after these installations for a hands-off implementation.

### Embrace remote work

After years of pandemic, remote work has become mainstream. It is not only a
way to reduce emissions from healthcare (which causes between 1% and 5% of
global emissions[2]) through lower rates of infectious diseases and lower
stress levels from not sitting in traffic, it also reduces energy expenditure
for office space and personal transportation.

Not every employee enjoys remote work, so a hybrid model where everyone is free
to choose for themselves how much or how little they want to be remote might
make the most sense.

### Use trains rather than flights

Flying is notoriously polluting and isn't always necessary. Meetings don't
always need to happen in person across long distances and can sometimes be done
via video call.

When people do need to meet, consider trains as an option. Trains don't always
make sense (long distances, trans-oceanic travel), but it's an often overlooked
option even when it would make the most sense. Trains can also be cheaper and a
less stressful experience than flying: travelers don't need to get there 2
hours in advance, no need to wait for luggage, and it goes from city center to
city center directly.

### Switch to a 4 days work week

Along with remote work, this is becoming less and less of a radical idea:
several companies in the UK have recently switched to 4 days a week at 100% pay
for 100% productivity[3]. Working one day a week less improves quality of life,
which in turn reduces stress and healthcare needs but also results in better
output from employees[4].

Making greener software requires more optimized and better-architected code
which is more likely to happen when workers are healthier and happier.

## Conclusion

The climate crisis has been looming for decades without much action[5], the
Russian invasion of Ukraine shook things up further by drastically raising
energy prices. Energy shortages could be part of our near future: building
software to use less energy and do it more efficiently is part of the solution.

Besides making economical and environmental sense, it is also positive for an
organization's public image. Generation Z is particularly sensitive to
environmental issues[6], which influences their consumption choices.

Furthermore, we are likely entering an economical recession, and cost reduction
makes even more sense in that context.

I hope some of the strategies in this post will inspire individual readers to
advocate and push for change in the way software is built. Greener software is
an emerging trend, and now is a good time to get ahead of the curve.

[0]: https://archive.ph/YLvgJ, page 1, 7730 kgCO₂e × (16.6% from manufacturing + 0.1% from transportation) = 1290.91 kgCO₂e
[1]: https://archive.ph/YLvgJ, table on page 2
[2]: https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(20)30121-2/fulltext
[3]: https://edition.cnn.com/2022/06/06/business/four-day-week-trial-uk/index.html
[4]: https://www.bbc.com/worklife/article/20210819-the-case-for-a-shorter-workweek, "Evidence suggests that one of the biggest advantages of working fewer weekly hours is that it makes people better workers."
[5]: https://www.theguardian.com/science/2021/jul/05/sixty-years-of-climate-change-warnings-the-signs-that-were-missed-and-ignored
[6]: https://www.pewresearch.org/science/2021/05/26/gen-z-millennials-stand-out-for-climate-change-activism-social-media-engagement-with-issue/

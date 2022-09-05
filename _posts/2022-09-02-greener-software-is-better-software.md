---
layout: post
published: false
title: "Greener software is better software"
intro: >-
  This post was inspired by Asim Hussain's [Principles.Green](https://principles.green) personal project and website, along with current events.
---

why greener is better
  costs less
    elec, servers, bandwidth
  better ux
    faster, uses less battery
  metrics collection
    needed for targetting what to improve
    helps build better software overall
    better business insights
how
  embodied carbon
    what it is
    use/amortize hardware longer
    sell decommissioned hardware instead of binning
  energy proportionality
    def
    run higher load on less machines
  demand shaping
    def
    reduce consumption during dirty elec
    ask the user
  demand shifting
    run computation off peak/during green energy surpluses
  networking
    send less data
    closer to the user
    reuse connections
  performance
    performant = optimized = less energy used

beyond software
  employee incentives
  choose cleaner energy
  remote work
  use trains
  4 days work week (lower human cost, healthcare)

conclusion
  energy shortages
  public image
  cost reduction

The energy crisis following Russia's illegal invasion of Ukraine gave the world a wake up call regarding our energy use (and waste.) This winter is shaping to be challenging in terms of energy supply with some operators and countries considering rolling blackouts or shutdown mandates.

As software engineers, architects, and managers, we can do our part to ensure the software we produce is more energy efficient: it's better for the climate, the users, the bottom line, and the engineers (in no particular order!)

## Why greener is better

### It makes financial sense

A good proxy for gauging carbon emissions is energy and resource uses. Generally speaking, using more electricity and more hardware is correlated with dirtier software and higher emissions. By building greener software, the business also reduces its electricity bill, its server and hosting bill, and its bandwidth requirements.

### It can lead to a better user experience (UX)

Less demanding software runs better on recent hardware and on older hardware, requiring less computation. Have you ever noticed how fast static websites with little to no JavaScript (like this one) load compared to SPAs? This is because HTML, CSS, and a sprinkle of JavaScript is much easier to process and render, and thus uses less energy. Optimizing your software to reduce its carbon footprint gets you better UX, as long as the UX designers are involved early and make the right tradeoffs: less computationally intensive doesn't mean barebones.

### It requires collecting metrics which are also useful for business decisions

Every optimization will help reduce emissions, but focusing on the wrong one isn't the most impactful way to go. Without metrics and application profiling, the engineering team will be missing out on areas that need optimization the most and spend time on marginal improvements instead.

Once these metrics are in place, they can also be used to make informed business decisions about the product or future direction.

Designing software to report metrics encourages a more modular and flexible architecture which will be easier to maintain and extend for the lifetime of the software (just like automated testing as a requirement does, I might write a post on that topic in the future.) Having metrics also generates the need for monitoring, which is a requirement to achieve better quality in software.

## How to produce greener software?

### Use hardware longer

Producing anything involves emissions, hardware is no exception. Once it has been produced, the carbon has been emitted whether the hardware is used for a couple of years of five years. Producing its replacement also emits carbon.

If hardware is replaced later, emissions are reduced: a 2019 Dell R640 server costs 1290 kg of CO₂ equivalent (kgCO₂e) to produce[0]. Replacing it after four years (Dell's estimated product lifetime[1]), it would have cost 323 kgCO₂e/year. But if replaced a year later, this number drops to 258 kgCO₂e/year.

### Sell decommissioned hardware instead of destroying/recycling it

Hardware that the organization doesn't need anymore can be useful to other businesses or individuals. Almost every business I've worked with threw away vast quantities of 4–5 years old laptops, servers, monitors, furniture… Sending it to the recycler still means it will be destroyed (in most cases) rather than turned into a brand new machine, and a fraction only of its materials will be recovered; the rest becoming e-waste.

Instead, it might be worthwhile to pull the storage from it (which can be safely destroyed, or better yet safely erased) and sell the hardware. If the logistical burden on the organization is too much, donate the hardware to a local user group, or the friendly neighbourhood hackerspace. There are also companies specializing in refurbishing and reselling decommissioned hardware.

There might be tax implications to selling deprecated assets, but there are also ways around it; check with a CPA as this depends on your jurisdiction. The equipment could also be donated instead of sold, which can yield a tax benefit.

### Use a smaller number of bigger servers, and keep them busier

In a nutshell, power use doesn't scale linearly with utilization: powering any server takes a nominal amount of electricity just so that the machine is on and ready to work. So, to do nothing (0% utilization), an example server would use 250W. At 50% utilization, that same server might use 280W; and to run a 100% load it might use 295W.

Thus, reducing the number of individual machines and consolidating their load onto larger machines to make them busier will use less power overall. To further optimize power usage, CPUs could be made to run slower off peak load hours and putting the metrics collection facilities mentioned earlier to good use.

### Have an "eco" mode toggle for your applications

Similar to how appliances have an "eco" program or mode that makes trade-offs between resource use and performance or time, software could also have an "eco" mode. In fact, every major OS has a way to adjust computer or smartphone performance to reduce energy use (and prolong battery life).

As far as I know, this is a largely untapped area for SaaS or local software: I don't know of any application or webapp that lets me adjust performance to reduce resource use directly. Most SaaS will offer different tiers but they're about market segmentation and revenue optimization, not directly correlated with carbon emmissions. One could also imagine a monthly discount based on how much time was the webapp running in "eco" mode as it would translate to lower variable costs for the provider.

The toggling could also be automated, so that the application runs in "eco" mode during periods of peak dirty electricity generation and in performance mode during clean energy surpluses.

### Shift computation to locations and/or times where there is a surplus of electricity

Along with having an "eco" mode, software could be architected to run its heavier computations in times and locations where there is a surplus of clean energy as it's not always necessary to run computations at the nearest edge and instantly. The goal being to take advantage of clean energy surpluses as it can't easily be stored for later use, contrary to computation results which can be saved and recalled later.

### Send less data over shorter distances, reusing connections

Moving data around incurs a carbon cost, both in electricity to send the packets but also in the extra hardware required for the extra traffic. By sending less data over shorter distances, not only is less carbon required for transmission, it also reduces the hardware requirements to accomodate the traffic. And it results in less data to process for the client, which might also reduce power usage.

Applications might also optimize their connections and keep them open longer rather than closing them each time. This reduces the amount of handshakes required, resulting in lower traffic and computation requirements.

Reducing network use might sound contradictory to computation shifting, and it is. Every organization should consider the tradeoffs of each technique and decide on the best mix for their use-case.

### Make application performance a core requirement

A performant application is an optimized application. And an optimized application uses less resources to achieve similar or better results than its unoptimized equivalent. Having application performance as a core requirement will yield lower carbon emissions (and higher quality software overall) as a side effect. Depending on the current organizational culture, this will require more or less effort but it will organically enable every other technique mentioned previously.

## Beyond software

While this post mostly focused on software architecture and hardware, there are things organizations can do beyond software that contributes to reducing their overall emissions; setting an overall tone and philosophy to the way an organization is doing business.

### Individual incentives and benefits

Incentives through benefits are a financially efficient way to increase compensation and attract candidates, so why not encourage individuals to make greener choices? Organizations can subsidize the cost of better transportation choices (buying and using a bicycle or using public transit instead of driving), implement partnerships with power companies for a discounted cleaner energy rate at home, incite repair and reuse of company equipment, reduce meat and fish consumption, consume locally produced foods… There are a myriad of options, only limited by imagination.

### Power offices and datacenters with cleaner energy

Most utility companies offer cleaner energy plans, so why not switch offices and datacenters to these instead? It's usually rather straight-forward and makes a difference when utilities decide on building new plants to increase capacity.

### solar panels, rooftop food gardens, 
A step further 


beyond software
  employee incentives
  choose cleaner energy
  remote work
  use trains
  4 days work week (lower human cost, healthcare)

conclusion
  energy shortages
  public image
  cost reduction

[0]: https://archive.ph/YLvgJ, page 1, 7730 kgCO₂e × (16.6% from manufacturing + 0.1% from transportation) = 1290.91 kgCO₂e
[1]: https://archive.ph/YLvgJ, table on page 2

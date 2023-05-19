# Open Source

* [OSDC - Open Source Development Course](https://osdc.code-maven.com/)
* [OSDC instances](https://osdc.code-maven.com/instances)
* [Open Source and organizations](https://osdc.code-maven.com/open-source-by-organizations/)

* A few days ago I posted [Passing maintenance or deprecating projects?](https://dev.to/szabgab/passing-maintenance-or-deprecating-projects-5bg7)
There were a few interesting comments and links.
    * [CorgiBytes](https://corgibytes.com/) offering maintenance services
    * [I'm Now a Full-Time Professional Open Source Maintainer](https://words.filippo.io/full-time-maintainer/)

A few keywords:
    * maintenance
    * Succession planning, handover
    * Security issues

## Support service for Open Source projects

The problem, as also described by xkcd is about [dependency](https://xkcd.com/2347/)

How can you and your company reduce the risks related to Open Source projects. Especially Open Source projects going unmaintained?

Your company depends on many open source libraries, for example the Perl modules or Python packages you use in your applications.
Replacing those libraries would be costly to your teams and thus it is valuable to make sure these packages are maintained.
Bugs are fixed, new features are added, Pull-Request and Issues are handled, etc.
This can be achieved by asking your employees to spend time on these projects, but it would likely be very costly. Besides, your employees are already busy.

My offer is to take a list of modules your applications depend on and provide continuous maintenance for them. This will
* Mitigate the business risk of these open source projects going totally unmaintained.
* It will allow us to establish a communication channel to better understand your needs from the project(s).
* It can provide your employees a private channel to ask questions about the various projects.

Learning about the specific needs of the team will help me steer the projects in the directions that will be beneficial to the team, eventually saving time for them.

We will agree on a list of Perl or Python libraries that are covered in our contract.
Your employees will be able to send us technical questions about any of the libraries we include in the contract.
We will monitor the development of each one of these projects to ensure issues are handled on a timely basis.
That the project has an adequate test suite,


Create a report on each one of the open source projects - bus factor, activity, level of risks

## Case studies

* A patch for the Perl [DBD::mysql](https://metacpan.org/pod/DBD::mysql) package.
A company contacted me to take some changes they made in-house to the DBD::mysql Perl library and add it to the official open source project.

As it turned out they contacted me some 3 years after they implemented that change. They wanted to upgrade to the most recent version of the module, but could not do it easily
as they had local changes. I looked at the problem they fixed locally and found a couple of things.
    * The fix the company implemented locally had an obvious security issue opening the code to [SQL injecttion attackes](https://bobby-tables.com/). It risked the company, their clients, and would have never been accepted to the open source project.
    * There was an issue opened about that problem even before they "fixed" it internally.
    * There was even a patch attached to the issue (this was before GitHub and pull-requests) that dated before the "local fix".

This whole thing could have been avoided if they understood how to really work with open source projects or if they had a contract with someone to make sure the packages is maintained properly.

* A client was relying on a Python package that itself had a number of dependencies that in turn had their own dependencies. A typical dependency chain:
Company depends on A that depends on B that depends on C.

One of the dependencies (in our case C) deprecated a feature that was used by B and we started to get deprecation warnings. Unfortunately package B has not seen a single commit in more than a year. Even though there are new issues and new pull-requests waiting.

At one point that deprecated featuer will be removed from C. At that point the client will be stuck with an old version of C. Slowly other dependencies might start to require a new version of C. At that point more of the clients dependencies will be stuck in the past. No security fixes and no criticial fixes will be applied to the old versions of these packages.

## Maintenance issues

* Make sure each package has a good test coverage.
* Make sure each package has Continuous Integration running.
* Security and other critical open issues are handled
* Pull-requests are handled.
* Making sure the package will work on newer versions of hardware, the programming language, and the dependencies of the project.

## How do companies handle the risk?

* Disregard it. Hope others will deal with it. 👿 Can you really afford to rely on others? That does not sound like a smart business decision. It would be probably wiser to find some way to reduce the risk.
* Create bug bounties and feature bounties. 👿 It is usually very hard to estimate how long will fixing an issue take.  Many times the specific bug is not the only issue. If a package is not maintained then it is unlikely that someone will pick up the bounty. Also most open source developers frown upon getting paid for specific tasks.
* Let your developers work on the open source projects you rely on. 👿 This is generally a good idea. If your developers know how to do it and care enough to do it. However this is not always the case and it can be very costly. Their plates are probably full with the in-house project that will make money for the organization. They don't have that much time to deal with open source projects.
* Sponsor the maintainers of the projects. 👿 This is also a good idea, but many projects are maintained (or not) by people who are not interested in an extra 100 USD a month and giving a few thousand USD to the maintainers of all the packages you use can be really costly. After all even small projects will have 10s of immediate dependencies and hundreds of indirect dependencies.


<!-- omit in toc -->
# Contributing to Bergflix. Frontend

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>  
> - Star the project 🌟
> - Tweet about it 🐦
> - Refer this project in your project's readme 📄
> - Mention the project at local meetups and tell your friends/colleagues 📢

<!-- omit in toc -->
## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
- [Styleguides](#styleguides)
  - [Commit Messages](#commit-messages)
  - [Contribution Workflow](#contribution-workflow)
- [Join The Project Team](#join-the-project-team)

## Code of Conduct

This project and everyone participating in it is governed by the
[Bergflix. Frontend Code of Conduct](https://github.com/bergflix-remake/frontend/blob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to <contact@bergflix.de>.

## I Have a Question

Before you ask a question, it is best to search for existing [Issues](https://github.com/bergflix-remake/frontend/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. You can also join our [Discord Server](https://discord.bergflix.de) and ask your question there.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/bergflix-remake/frontend/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

<!--
You might want to create a separate issue tag for questions and include it in this description. People should then tag their issues accordingly.

Depending on how large the project is, you may want to outsource the questioning, e.g. to Stack Overflow or Gitter. You may add additional contact and information possibilities:
- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum
-->

## I Want To Contribute

> ### Legal Notice <!-- omit in toc -->
>  
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs

<!-- omit in toc -->
#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (If you are looking for support, you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](https://github.com/bergflix-remake/frontend/issues?q=label%3Abug).
- Use the correct issue template.
- Provide all necessary information mentioned in the issue template.

<!-- omit in toc -->
#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs must be sent by email to <security@bergflix.de>.
<!-- You may add a PGP key to allow the messages to be sent encrypted as well. -->

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/bergflix-remake/frontend/issues/new).
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the *reproduction steps* that someone else can follow to recreate the issue on their own.
- Use the correct issue template.

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro`. Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags (such as `critical`), and the issue will be left to be [implemented by someone](#your-first-code-contribution).

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Bergflix. Frontend, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

<!-- omit in toc -->
#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Perform a [search](https://github.com/bergflix-remake/frontend/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset.

<!-- omit in toc -->
#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/bergflix-remake/frontend/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. <!-- this should only be included if the project has a GUI -->
- **Explain why this enhancement would be useful** to most Bergflix. users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

### Your First Code Contribution
<!-- TODO
include Setup of env, IDE and typical getting started instructions?

-->
Which IDE you use is up to you. We recommend using [Visual Studio Code](https://code.visualstudio.com/) as it is free and cross-platform. You can also use any other IDE you like.
To get started, you can check out [this guide](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) on how to contribute to open source projects on GitHub.
Please read the [Styleguides](#styleguides) section before you start working on the project.

## Styleguides

### Commit Messages

We are using [Conventionnal Commits](https://www.conventionalcommits.org/en/v1.0.0/) for our commit messages. This allows us to generate changelogs automatically.
Please try to adhere to this style when committing.

To spice up your commit messages, you can use emojis. We are using [gitmoji](https://gitmoji.dev/) for this.

### Contribution Workflow

Internally, we use Jira for our project management. We are using [Gitflow](https://www.atlassian.com/de/git/tutorials/comparing-workflows/gitflow-workflow) as our branching model - or at least we try to adopt it. Yes, most teams have switched to **trunk based developement**, however, since we're trying to get a more structured workflow, we're sticking to Gitflow for now.

## Join The Project Team

If you want to join the core developement Team, please join our [Discord Server](https://discord.bergflix.de) and contact us there.

<!-- omit in toc -->
## Attribution

This guide is based on the **contributing-gen**. [Make your own](https://github.com/bttger/contributing-gen)!

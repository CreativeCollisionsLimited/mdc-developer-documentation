# Code Reviews

It’s a workflow in which developers submit their code for feedback prior to merging branches, or deploying code to production. This feedback is usually given by colleagues, either other developers, a manager, or a tech lead.

### Why is it beneficial?
Code review is based on the simple assumption that “two heads are better than one”. We all have blindspots when writing code: approaches we don’t consider, efficiencies we don’t make, and parts of the system that we understand less well than others. Code review is an attempt to eliminate these blindspots and improve code quality by ensuring that at least one other developer has input on every line of code that makes it into production.

### Recommendations to review the code:
* Read the code
* Read the related Jira tickets & the requirement docs.
* Deploy the code on your local dev environment. (with migrations and seeders)
    - Run the Unit tests
    - Check the changes against the requirements
    - Check for code defects, bad practices, or any misconception.
    - Go through the checklist.



## Checklist


### Readability
When reading through the code, it should be relatively easy for you to discern the role of specific functions, methods, or classes.

### Maintainability
warning signs that code may not be easy to maintain in the future:
* It’s very tightly coupled to another system.
* Configuration is hard-coded.
* It contributes to tech debt by increasing investment in a technology that the team wants to phase out (e.g., by using functionality from an old version of a library).
* It relies on old code that has been slated for removal or replacement.

### Security
Ask yourself: if I was trying to gain access to the system or steal data, how could I exploit this code?

### Speed and Performance
Performance for users reflects a focus on how quickly your code performs for the end user. Lengthy database queries, unoptimized assets, and multiple API requests can all work to make your code feel slow.

### Documentation
Check whether the code you’re reviewing requires extra documentation to go along with it.

### Reinventing the Wheel
Make sure that the code uses all the appropriate language features.

### Reliability
Reliable code is code that is failure tolerant.
Code that assumes nothing will go wrong generally ends up failing catastrophically!

### Scalability
Consider scalability by imagining what might happen to the code you’re reviewing if it were put under unexpected load.

### Reusability
**DRY** - It means Don’t Repeat Yourself.
In other words, don’t duplicate code or functionality.
Check that the code is written with likely future use-cases in mind.

### Patterns & Naming conventions
Adding new code to a codebase is whether it matches the patterns that your team have already established.

### Test Coverage and Test Quality
A flawed test is more dangerous than having no test.
Check the method of testing.

### Fit for Purpose
Code may work, but does it work in the way that your Product Manager, CEO, or the user expects? Check against the requirements document and the jira ticket.

### Notice What’s Missing
it’s important to think through edge cases, unexpected inputs, and error handling scenarios that the code’s author may not have considered.



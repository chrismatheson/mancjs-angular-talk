#Goal

The idea of this talk is to show the internals of the iVendi platform (focusing on the javascript / web side) to other developers who might be interested.

###Disclaimer

Im not doing **all** the work.
You **will** be asked to proffer sugestions & direction
iVendi is a small company with large goals, this is all **real** code, **no** examples

#Approach

The talk will have a loose flow explaining all the parts that make up the iVendi system. Ill attempt to civer as much of this list as possible, but i want to encourage audience participation to guid the journey.

- CQRS Kernel
- C# API
    - Read models as REST endpoints.
    - websockets for async notifications
- Angular SPA's
    - login
    - form validation & complex validation (what happens when you need more that just required & max length)
    - custom model binding
        - having ```timestamp``` bound to a formatted date input string
        - having ```TotalMonths``` bound to two input fields
    - third party modules (UI Bootstrap, ng-infinatescroll)
    - view management
        - resolve function (helpfull & harmfull)
        - angular from non root level location

- possible area's that can also be covered (although maybe not very well by me)
    - building & testing
        - TeamCity
        - Bower
        - Grunt angular specific tasks
    - deployment
        - azure
    - componentization
        - where we went wrong
        - new idea of what a 'component' is
    - Pitfalls of Async backend
        - Fake-ing it, and evential consitency
        - using $httpCache
    - Future ...
        - more async notifications & actions
        - live chat system
        - alternate notification systems (SMS etc)
    - Graph DB for data import
        - (annother talk completely)

Im going to try and host a town-hall style talk, encouraging audience participation in both the asking of questions, sugesting direction of the walktrhough and descussion of problems / solutions.




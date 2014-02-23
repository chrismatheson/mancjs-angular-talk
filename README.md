#Goal

The idea of this talk is to show the internals of the iVendi platform (focusing on the javascript / web side) to other developers who might be interested.

###Disclaimer

Im not doing **all** the work, you **will** be asked to proffer sugestions for direction and disscussion. This session aims for a forum where angular appraoches to problems can be demo'ed abd then have a small comprision to other's (jQurey POJS react backbone ember etc)

The talk is not going to show you 'perfect world' code. Ivendi is a small operation and we have lots to do in limited time with too few resources - sometimes if the code works we just have to move on without time to reflect, refactor and improve!

#Approach

The talk will have a loose flow explaining all the parts that make up the iVendi system. Ill attempt to cover as much of this list as possible, but i want to encourage audience participation to guid the journey.

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
- trolling
    - Grunt V Gulp speed demo

- possible area's that can also be covered (although maybe not very well by me)
    - building & testing
        - TeamCity
        - Bower
        - angular specific tasks
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

#Ahead of time

it would be helpfull but by no means required to have a basic understanding of what angular is. Id recomend  [egghead.io](http://egghead.io/) as well as the [angualr site itself](http://angularjs.org)

Think of some things you are doing, or want to do, and would liek to see how this would be approahed in angular

Send PR's for topics to cover, or raise issues and +1 for topics of interest.
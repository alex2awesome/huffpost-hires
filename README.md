huffpost-hires
==============

Hiring is hard ...but is Clojure?

Running Locally
----

* Download jvm and leiningen so that you can call ```lein```
* clone the repo
* Within the root folder of huffpost-hires setup the environment ```$ source env.sh```
* Start up the REPL ```lein repl```
* Build the tables

```
(use 'huffpost-hires.models)
(huffpost-hires.models/init-tables)
```

* Import and run the server locally all in one call ```(use 'huffpost-hires.web)```
* Visit <http://0.0.0.0:5000>
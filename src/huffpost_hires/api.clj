;; Many thanks to https://github.com/diamondap/ring-sample
(ns huffpost-hires.api
  (:require [cheshire.core :as json]
            [clojure.java.jdbc :as jdbc]))

(def db (System/getenv "DATABASE_URL"))

; Tasks are the glue between Applicants and Interviewers.  
; Each task has a relation to an Interviewer and an Applicant

; 		  Applicant
; 		 /	|	\   \
; 	Task  Task  Task  Task
; 		\   |	 |	/
; 		Interviewer



(defn make-table-applicants
	"Create the Applicants Table in our database."
	[]
	(try (jdbc/with-connection db
		(jdbc/create-table :applicants
						[:id :integer]
						[:name :string]
						[:email :string]
						[:role :string]
						[:phone :string]
						[:resume :string] ;; for now it can be a hyperlink to a googledoc
						[:asof :datetime]
						[:pass :boolean]
						[:completed :boolean]))
		(catch Exception e 
			(println (str "EXCEPTION in make-table-applicants: " e)))))

(defn init-applicants-table
  []
  (println "Initializing Applicants Table.")
  (println "TODO: init-applicants-table")
  ;(make-table-applicants)
  )

(defn make-table-interviewers
	"Creating the Interviewers Table in our database."
	[]
	(println "Making the Interviewers Table in database.")
	(try (jdbc/with-connection db
		(jdbc/create-table :interviewers
						[:id :integer]
						[:name :string]
						[:email :string]
						[:phone :string]))
		(catch Exception e 
			(println (str "EXCEPTION in make-table-interviewers: " e)))))

(defn init-interviewers-table
	"Fill Interviewers table with data"
	[]
	(make-table-interviewers)
	(println "Initializing Interviewers table")
	(jdbc/with-connection db
		(jdbc/insert-records :interviewers
			{:id 1 
				:name "Fred Flintstone"
				:phone "12223334444"
				:email "alexandra.berke@huffingtonpost.com"}
			{:id 2 
				:name "Alice Flintstone"
				:phone "12223334444"
				:email "alexandra.berke@huffingtonpost.com"}
			{:id 3 
				:name "Amy Flintstone"
				:phone "12223334444"
				:email "alexandra.berke@huffingtonpost.com"})))

(defn init-tables
  "Create all of the tables in our database and fill each with dummy data."
  []
  ;(init-applicants-table)
  (init-interviewers-table))

(defn query
	"Executes a query. Returns a vector of results. Each item in the vector
	is a hash, keyed by column name. Param sql must be a vector. To execute
	a simple SQL string, pass in a vector containing only the string. To
	execute a query or statement with params, the sql string should come first,
	followed by the params to be bound."
	[sql]
	(try
		(jdbc/with-connection db
			(jdbc/with-query-results rs sql
				(into [] rs)))
		(catch Throwable t (prn sql) (throw t))))

(defn query-json
	"Executes a query and returns the result as json. Param sql should be a
	vector with [sql-string params...] or just [sql-string]."
	[sql]
		(json/generate-string (query sql)))

(defn interviewers-all
	"Returns All Interviewers in Database in json"
	[request]
	(println "api/interviewers-all")
	(let [statement "select * from interviewers order by name"]
		(if (empty? (try (query [statement]) (catch Exception ex [])))
			(init-tables))
		(query-json [statement])))














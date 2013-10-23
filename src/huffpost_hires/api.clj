(ns huffpost-hires.api
	(require [huffpost-hires.models :as models]))

;; Handles routing api requests




;; /api/interviewer/all
(defn interviewers-all
	"Returns All Interviewers in Database in json"
	[]
	(println "api/interviewers-all")
	(models/query-json ["select * from interviewers order by name"]))

;; /api/applicant/all
(defn applicants-all
	"Returns All Interviewers in Database in json"
	[]
	(println "api/applicants-all")
	(models/query-json ["select * from applicants"]))

;; /api/applicant/?id='applicantID'
(defn applicant
	"Returns specified applicant"
	[request]
	(println (str "api/appicant with request:" request))
	(models/query-json [(str "SELECT * FROM applicants WHERE id=" (request :id))]))

;; /api/interviewer/?id='interviewerID'
(defn interviewer
	"Returns specified interviewer"
	[params]
	(println (str "api/interviewer with params:" params))
	(models/query-json [(str "SELECT * FROM interviewers WHERE id=" (params :id))]))

;; /api/applicant/complete-tasks?id='applicantID'
(defn complete-tasks-by-applicant
	"Returns all completed tasks for applicant"
	[params]
	(println (str "/api/applicant/complete-tasks with params:" params))
	(models/query-json [(str "select * from tasks WHERE applicant=" (params :id) " AND completed=1")]))

;; /api/applicant/incomplete-tasks?id='applicantID'
(defn incomplete-tasks-by-applicant
	[params]
	(models/query-json [(str "select * from tasks WHERE applicant=" (params :id) " AND completed=0")]))

;; /api/interviewer/complete-tasks?id='interviewID'
(defn complete-tasks-by-interviewer
	[params]
	(models/query-json [(str "select * from tasks where interviewer=" (params :id) " AND completed=1")]))

;; /api/interviewer/incomplete-tasks?id='interviewID'
(defn incomplete-tasks-by-interviewer
	"Returns all completed tasks for interviewer"
	[params]
	(models/query-json [(str "select * from tasks where interviewer=" (params :id) " AND completed=0")]))

(defn handle-get-request-applicant
	"routing helper for handle-get-request:
	Called upon GET request to url /api/applicant/*"
	[route params] ; route == * in the GET request
	(println (str "api/handle-get-request-applicant with route: " route "; params: " params))
	(case route
		"" (applicant params)
		"all" (applicants-all)
		"complete-tasks" (complete-tasks-by-applicant params)
		"incomplete-tasks" (incomplete-tasks-by-applicant params)
		(str "Invalid api request to /api/applicant/" route)))


(defn handle-get-request-interviewer
	"routing helper for handle-get-request:
	Called upon GET request to url /api/interviewer/*"
	[route params] ; route == * in the GET request

	(case route
		"" (interviewer params)
		"all" (interviewers-all)
		"complete-tasks" (complete-tasks-by-interviewer params)
		"incomplete-tasks" (incomplete-tasks-by-interviewer params)
		(str "Invalid api request to /api/interviewer/" route)))


(defn handle-get-request
	"Called by web upon GET request to url /api/*/*"
	[request]

	(let [params (request :params) route (params :*) route-prefix (first route) route-suffix (second route)]
		(println (str "params: " params))
		(println (str "route:" route))
		(case route-prefix
			"applicant" (handle-get-request-applicant route-suffix params)
			"interviewer" (handle-get-request-interviewer route-suffix params)
			"Invalid api request")))

(defn handle-post-request
	[request]
	(println "TODO: handle-post-request"))

(defn handle-put-request
	[request]
	(println "TODO: handle-put-request"))

(defn handle-delete-request
	[request]
	(println "TODO: handle-delete-request"))












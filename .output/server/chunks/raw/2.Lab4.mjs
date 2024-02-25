// ROLLUP_NO_REPLACE 
 const _2_Lab = "{\"parsed\":{\"_path\":\"/expose-your-app/lab\",\"_dir\":\"expose-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Lab 04: Exposing Your Application\",\"description\":\"In this lab, we will deploy a sample application to a Kubernetes cluster. The application will be automatically exposed using NodePort. NodePort is a simple way to make your application accessible from outside the Kubernetes cluster. It is primarily used for testing purposes and is not recommended for production environments.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"lab-04-exposing-your-application\"},\"children\":[{\"type\":\"text\",\"value\":\"Lab 04: Exposing Your Application\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In this lab, we will deploy a sample application to a Kubernetes cluster. The application will be automatically exposed using NodePort. NodePort is a simple way to make your application accessible from outside the Kubernetes cluster. It is primarily used for testing purposes and is not recommended for production environments.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"deployment-instructions\"},\"children\":[{\"type\":\"text\",\"value\":\"Deployment Instructions\"}]},{\"type\":\"element\",\"tag\":\"ol\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Deploy the Application:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Navigate to the main directory of the application by entering the root path \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"/\"}]},{\"type\":\"text\",\"value\":\" in your terminal.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Deploy the application to the cluster by running the following command:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"code\":\"make deploy\\n\",\"language\":\"shell\",\"meta\":\"\",\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"make\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deploy\\n\"}]}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Access the Deployed Services:\"}]},{\"type\":\"text\",\"value\":\"\\nOnce the deployment is complete, several services including Zipkin, Swagger, Prometheus, Grafana, and a Node.js application will be running and exposed on various ports. To explore these services, follow the instructions below:\"},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Zipkin:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Zipkin is used for tracing network requests within your application.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To access Zipkin, check the ports section in your terminal and navigate to the port \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"9411\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To try out Zipkin with sample data, download the following JSON file and upload it to Zipkin:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"code\":\"https://github.com/openzipkin/zipkin/blob/master/zipkin-lens/testdata/ascend.json\\n\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"https://github.com/openzipkin/zipkin/blob/master/zipkin-lens/testdata/ascend.json\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Prometheus:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Prometheus is used for monitoring the application. It allows you to see which APIs are currently down.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To access Prometheus, navigate to port \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"30000\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In Prometheus, go to the \\\"Targets\\\" section to view the status of various APIs. For this lab, some APIs are intentionally set to be down and will be brought up later.\"}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Grafana:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Grafana is used for visualizing metrics through graphs.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To access Grafana, navigate to port \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"32000\"}]},{\"type\":\"text\",\"value\":\".\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"resetting-grafana-admin-password\"},\"children\":[{\"type\":\"text\",\"value\":\"Resetting Grafana Admin Password\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"If you encounter issues logging into Grafana with the expected credentials, for learning purposes, you can reset the admin password using the following steps:\"}]},{\"type\":\"element\",\"tag\":\"ol\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Retrieve the name of the Grafana pod:\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"code\":\"kubectl get pods -n monitoring\\n\",\"language\":\"shell\",\"meta\":\"\",\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" pods\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -n\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" monitoring\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Exec into the Grafana pod:\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"code\":\"kubectl exec -it <grafana-pod-name> -n monitoring -- /bin/sh\\n\",\"language\":\"shell\",\"meta\":\"\",\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" exec\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -it\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"grafana-pod-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -n\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" monitoring\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" /bin/sh\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Reset the admin password:\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"code\":\"grafana-cli admin reset-admin-password newpassword\\n\",\"language\":\"shell\",\"meta\":\"\",\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"grafana-cli\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" admin\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" reset-admin-password\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" newpassword\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"br\",\"props\":{},\"children\":[]},{\"type\":\"text\",\"value\":\"your username is \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"admin\"}]},{\"type\":\"text\",\"value\":\" and password is \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"newpassword\"}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"importing-a-prometheus-dashboard-into-grafana\"},\"children\":[{\"type\":\"text\",\"value\":\"Importing a Prometheus Dashboard into Grafana\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To visualize Prometheus metrics in Grafana, you can import pre-configured dashboards. Here’s how to import a Prometheus dashboard:\"}]},{\"type\":\"element\",\"tag\":\"ol\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Access Grafana:\"}]},{\"type\":\"text\",\"value\":\" Log in to your Grafana instance using the admin credentials.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Open the Dashboard Import Interface:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"From the Grafana main menu, select the \\\"+\\\" icon on the left sidebar.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Choose \\\"Import\\\".\"}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Import Dashboard:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can import a dashboard using a dashboard ID from Grafana.com Dashboards, or by uploading a JSON file.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To import a dashboard from Grafana.com, enter the dashboard ID (e.g., \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"1860\"}]},{\"type\":\"text\",\"value\":\" for a popular Node Exporter dashboard) into the “Import via grafana.com” field and click \\\"Load\\\".\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Alternatively, if you have a dashboard JSON file, click \\\"Upload JSON file\\\" and select the file from your computer.\"}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Select Prometheus as the Data Source:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"During the import process, you will be asked to select a data source.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Choose \\\"Prometheus\\\" from the dropdown menu.\"}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Finalize Import:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"After selecting the data source, click \\\"Import\\\" to complete the process.\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You should now see the imported dashboard with metrics from your Prometheus data source.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Now we learn how to expose the apps. In the next section, we will learn how we can scale a Node.js application.\"}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"deployment-instructions\",\"depth\":2,\"text\":\"Deployment Instructions\",\"children\":[{\"id\":\"resetting-grafana-admin-password\",\"depth\":3,\"text\":\"Resetting Grafana Admin Password\"},{\"id\":\"importing-a-prometheus-dashboard-into-grafana\",\"depth\":3,\"text\":\"Importing a Prometheus Dashboard into Grafana\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:5.Expose-Your-App:2.Lab.md\",\"_source\":\"content\",\"_file\":\"5.Expose-Your-App/2.Lab.md\",\"_extension\":\"md\"},\"hash\":\"CcnkLsmuss\"}";

export { _2_Lab as default };
//# sourceMappingURL=2.Lab4.mjs.map
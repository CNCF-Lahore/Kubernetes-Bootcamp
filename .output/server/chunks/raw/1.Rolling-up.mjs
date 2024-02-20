// ROLLUP_NO_REPLACE 
 const _1_RollingUp = "{\"parsed\":{\"_path\":\"/update-your-app/rolling-up\",\"_dir\":\"update-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Rolling Up\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"understanding-rolling-updates\"},\"children\":[{\"type\":\"text\",\"value\":\"Understanding Rolling Updates\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Rolling updates are a fundamental feature in Kubernetes, enabling you to update the running version of your application seamlessly and without downtime. This approach is crucial for maintaining continuous availability, meeting the modern expectations of both users and developers for frequent updates.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"A rolling update in Kubernetes incrementally replaces old Pods with new ones, which are based on a new version of the deployment image. This process ensures that the application remains available to users and that the update does not consume all resources, allowing for a balanced deployment.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"architecture-and-workflow\"},\"children\":[{\"type\":\"text\",\"value\":\"Architecture and Workflow\"}]},{\"type\":\"element\",\"tag\":\"ol\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Update Trigger\"}]},{\"type\":\"text\",\"value\":\": An update is triggered (usually by changing the Docker image version in a Deployment).\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Pod Replacement\"}]},{\"type\":\"text\",\"value\":\": Kubernetes schedules new Pods with the new version while gradually terminating the old ones, ensuring that the service remains available throughout the process.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Resource Management\"}]},{\"type\":\"text\",\"value\":\": New Pods are only scheduled on Nodes with sufficient free resources, which optimizes resource use across the cluster.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Zero Downtime\"}]},{\"type\":\"text\",\"value\":\": Thanks to load balancing, users continue to access the service without interruption. The Service object in Kubernetes automatically redirects traffic to the available and updated Pods.\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"requirements-for-zero-downtime\"},\"children\":[{\"type\":\"text\",\"value\":\"Requirements for Zero Downtime\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Multiple Instances\"}]},{\"type\":\"text\",\"value\":\": Running multiple instances of your application is essential. This redundancy allows some Pods to be updated while others continue to serve user requests.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Proper Configuration\"}]},{\"type\":\"text\",\"value\":\": The Deployment must be properly configured to define the maximum number of Pods that can be unavailable and the maximum number of new Pods that can be created during the update.\"}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"rolling-update-commands\"},\"children\":[{\"type\":\"text\",\"value\":\"Rolling Update Commands\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"updating-a-deployment\"},\"children\":[{\"type\":\"text\",\"value\":\"Updating a Deployment\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To perform a rolling update, you typically update the image of the Deployment. For example, to update an application to a new version, you use the following command:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl set image deployment/<deployment-name> <container-name>=<new-image>:<tag>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" set\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" image\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment/\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"container-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"new-imag\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\":\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"ta\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"g\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This command sets a new image for the specified container within your Deployment. Kubernetes then starts a rolling update automatically.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"checking-the-rollout-status\"},\"children\":[{\"type\":\"text\",\"value\":\"Checking the Rollout Status\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To monitor the status of the rollout, use:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl rollout status deployment/<deployment-name>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" rollout\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" status\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment/\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This command provides real-time feedback on the progress of the update.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"rolling-back-an-update\"},\"children\":[{\"type\":\"text\",\"value\":\"Rolling Back an Update\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"If something goes wrong, Kubernetes allows you to rollback to a previous state of the Deployment:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl rollout undo deployment/<deployment-name>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" rollout\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" undo\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment/\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This command reverts the Deployment to its previous state, leveraging Kubernetes' versioned update feature.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"strategies-for-zero-downtime-deployments\"},\"children\":[{\"type\":\"text\",\"value\":\"Strategies for Zero Downtime Deployments\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Readiness Probes\"}]},{\"type\":\"text\",\"value\":\": Ensure your Pods have readiness probes configured. This makes Kubernetes only send traffic to Pods that are ready to handle requests.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Resource Limits\"}]},{\"type\":\"text\",\"value\":\": Define appropriate resource requests and limits to ensure that your containers have enough resources to run effectively but do not monopolize cluster resources.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Surge and Unavailability Settings\"}]},{\"type\":\"text\",\"value\":\": Customize the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"maxSurge\"}]},{\"type\":\"text\",\"value\":\" and \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"maxUnavailable\"}]},{\"type\":\"text\",\"value\":\" settings in your Deployment configuration. \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"maxSurge\"}]},{\"type\":\"text\",\"value\":\" defines the maximum number of Pods that can be created above the desired number of Pods during an update. \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"maxUnavailable\"}]},{\"type\":\"text\",\"value\":\" defines the maximum number of Pods that can be unavailable during the update process.\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"example-deployment-configuration-for-rolling-updates\"},\"children\":[{\"type\":\"text\",\"value\":\"Example Deployment Configuration for Rolling Updates\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Here's a snippet of a Deployment manifest that specifies these parameters:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-yaml shiki shiki-themes github-dark github-light\",\"code\":\"apiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: example-deployment\\nspec:\\n  replicas: 3\\n  strategy:\\n    type: RollingUpdate\\n    rollingUpdate:\\n      maxSurge: 1\\n      maxUnavailable: 1\\n  selector:\\n    matchLabels:\\n      app: example\\n  template:\\n    metadata:\\n      labels:\\n        app: example\\n    spec:\\n      containers:\\n      - name: example-container\\n        image: example/image:v1\\n        ports:\\n        - containerPort: 80\\n\",\"language\":\"yaml\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"apiVersion\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"apps/v1\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"kind\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"Deployment\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"metadata\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  name\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"example-deployment\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"spec\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  replicas\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"3\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  strategy\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":8},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"    type\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"RollingUpdate\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":9},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"    rollingUpdate\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":10},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"      maxSurge\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"1\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":11},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"      maxUnavailable\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"1\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":12},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  selector\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":13},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"    matchLabels\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":14},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"      app\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"example\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":15},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  template\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":16},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"    metadata\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":17},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"      labels\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":18},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"        app\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"example\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":19},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"    spec\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":20},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"      containers\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":21},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"      - \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"name\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"example-container\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":22},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"        image\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"example/image:v1\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":23},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"        ports\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":24},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"        - \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"containerPort\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"80\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This configuration ensures a rolling update with at most one extra Pod beyond the desired count (\"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"maxSurge\"}]},{\"type\":\"text\",\"value\":\") and at most one Pod unavailable (\"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"maxUnavailable\"}]},{\"type\":\"text\",\"value\":\") at any time during the update process.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"summary\"},\"children\":[{\"type\":\"text\",\"value\":\"Summary\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Rolling updates are a powerful feature of Kubernetes, allowing for continuous integration and delivery with zero downtime. By understanding and utilizing the concepts and commands outlined in this module, you can ensure that your applications remain available and responsive, even as you deploy updates and improvements.\"}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"understanding-rolling-updates\",\"depth\":2,\"text\":\"Understanding Rolling Updates\",\"children\":[{\"id\":\"architecture-and-workflow\",\"depth\":3,\"text\":\"Architecture and Workflow\"},{\"id\":\"requirements-for-zero-downtime\",\"depth\":3,\"text\":\"Requirements for Zero Downtime\"}]},{\"id\":\"rolling-update-commands\",\"depth\":2,\"text\":\"Rolling Update Commands\",\"children\":[{\"id\":\"updating-a-deployment\",\"depth\":3,\"text\":\"Updating a Deployment\"},{\"id\":\"checking-the-rollout-status\",\"depth\":3,\"text\":\"Checking the Rollout Status\"},{\"id\":\"rolling-back-an-update\",\"depth\":3,\"text\":\"Rolling Back an Update\"}]},{\"id\":\"strategies-for-zero-downtime-deployments\",\"depth\":2,\"text\":\"Strategies for Zero Downtime Deployments\",\"children\":[{\"id\":\"example-deployment-configuration-for-rolling-updates\",\"depth\":3,\"text\":\"Example Deployment Configuration for Rolling Updates\"}]},{\"id\":\"summary\",\"depth\":2,\"text\":\"Summary\"}]}},\"_type\":\"markdown\",\"_id\":\"content:7.Update-Your-App:1.Rolling-up.md\",\"_source\":\"content\",\"_file\":\"7.Update-Your-App/1.Rolling-up.md\",\"_extension\":\"md\"},\"hash\":\"bxpDpWp4EL\"}";

export { _1_RollingUp as default };
//# sourceMappingURL=1.Rolling-up.mjs.map

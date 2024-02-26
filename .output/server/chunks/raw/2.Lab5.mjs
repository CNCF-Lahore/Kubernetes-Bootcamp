// ROLLUP_NO_REPLACE 
 const _2_Lab = "{\"parsed\":{\"_path\":\"/scale-your-app/lab\",\"_dir\":\"scale-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Lab 05: Scaling Your Application\",\"description\":\"Welcome to Lab 05! In this session, we'll learn how to efficiently scale your applications using Kubernetes. We'll explore both declarative and imperative methods to give you the tools and understanding needed to manage your app's scalability like a pro.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"lab-05-scaling-your-application\"},\"children\":[{\"type\":\"text\",\"value\":\"Lab 05: Scaling Your Application\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Welcome to Lab 05! In this session, we'll learn how to efficiently scale your applications using Kubernetes. We'll explore both declarative and imperative methods to give you the tools and understanding needed to manage your app's scalability like a pro.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"scaling-with-the-declarative-approach\"},\"children\":[{\"type\":\"text\",\"value\":\"Scaling with the Declarative Approach\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The declarative approach is about telling Kubernetes what you want your application's infrastructure to look like, without having to detail every step to get there. This method aligns with the Infrastructure as Code (IaC) philosophy, allowing you to manage your infrastructure through version-controlled configuration files. This ensures transparency, reproducibility, and consistency.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"how-to-scale-up\"},\"children\":[{\"type\":\"text\",\"value\":\"How to Scale Up:\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Imagine our Node.js application is running smoothly with two replicas, but we need more horsepower to handle increasing load. Here's how we can scale up:\"}]},{\"type\":\"element\",\"tag\":\"ol\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"First, make sure you're in the Node.js app directory. If it's not on your machine, grab it from \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/deploy-an-app/lab\"},\"children\":[{\"type\":\"text\",\"value\":\"Lab 02\"}]},{\"type\":\"text\",\"value\":\".\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-bash shiki shiki-themes github-dark github-light\",\"code\":\"cd deploy/nodejsapp\\n\",\"language\":\"bash\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"cd\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deploy/nodejsapp\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Open the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"deployment.yaml\"}]},{\"type\":\"text\",\"value\":\" file and change the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"replicas\"}]},{\"type\":\"text\",\"value\":\" value from 2 to 3. Your file should now look something like this:\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-yaml shiki shiki-themes github-dark github-light\",\"code\":\"apiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: nodejs-app\\nspec:\\n  replicas: 3\\n  selector:\\n    matchLabels:\\n      app: nodejs-app\\n  template:\\n    metadata:\\n      labels:\\n        app: nodejs-app\\n    spec:\\n      containers:\\n      - name: nodejs-app\\n        image: ghcr.io/cncf-lahore/nodejs-app:latest\\n        ports:\\n        - containerPort: 80\\n\",\"language\":\"yaml\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"apiVersion\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"apps/v1\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"kind\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"Deployment\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"metadata\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  name\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"nodejs-app\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"spec\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  replicas\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"3\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  selector\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":8},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"    matchLabels\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":9},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"      app\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"nodejs-app\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":10},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"  template\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":11},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"    metadata\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":12},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"      labels\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":13},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"        app\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"nodejs-app\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":14},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"    spec\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":15},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"      containers\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":16},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"      - \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"name\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"nodejs-app\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":17},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"        image\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"ghcr.io/cncf-lahore/nodejs-app:latest\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":18},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"        ports\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\":\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":19},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"        - \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#85E89D;--shiki-default:#22863A\"},\"children\":[{\"type\":\"text\",\"value\":\"containerPort\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\": \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"80\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Apply the changes to scale up your deployment:\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-sh shiki shiki-themes github-dark github-light\",\"code\":\"kubectl apply -f deployment.yaml\\n\",\"language\":\"sh\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" apply\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -f\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment.yaml\\n\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"ALTIMAGE\",\"src\":\"https://github.com/CNCF-Lahore/Kubernetes-Bootcamp/blob/main/asserts/ks32.png?raw=true\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"scaling-with-the-imperative-method\"},\"children\":[{\"type\":\"text\",\"value\":\"Scaling with the Imperative Method\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The imperative method is more hands-on. You directly command the Kubernetes cluster to change your app's resources in real-time. It's like giving step-by-step instructions without defining the final state ahead of time.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"how-it-works\"},\"children\":[{\"type\":\"text\",\"value\":\"How It Works:\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"If you're curious to try the imperative method, start by removing the deployment created through the declarative method:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-sh shiki shiki-themes github-dark github-light\",\"code\":\"kubectl delete -f deployment.yaml\\n\",\"language\":\"sh\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" delete\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -f\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment.yaml\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Next, create a new deployment with three replicas directly:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-sh shiki shiki-themes github-dark github-light\",\"code\":\"kubectl create deployment nodejsapp --image=ghcr.io/cncf-lahore/nodejs-app:latest --replicas=3\\n\",\"language\":\"sh\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" create\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" nodejsapp\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --image=ghcr.io/cncf-lahore/nodejs-app:latest\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --replicas=3\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"ALTIMAGE\",\"src\":\"https://github.com/CNCF-Lahore/Kubernetes-Bootcamp/blob/main/asserts/ks33.png?raw=true\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To scale down in the future, use:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-sh shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get deployment\\nkubectl scale deployment nodejsapp --replicas=2\\n\",\"language\":\"sh\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" scale\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" nodejsapp\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --replicas=2\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"ALTIMAGE\",\"src\":\"https://github.com/CNCF-Lahore/Kubernetes-Bootcamp/blob/main/asserts/ks34.png?raw=true\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"list\",\"props\":{\"type\":\"success\"},\"children\":[{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Congratulations!\"}]},{\"type\":\"text\",\"value\":\" You've mastered scaling your applications up and down using both declarative and imperative methods. Ready for the next challenge? Let's move on to learning how to roll out updates without downtime in the final lab.\"}]}]}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"scaling-with-the-declarative-approach\",\"depth\":2,\"text\":\"Scaling with the Declarative Approach\",\"children\":[{\"id\":\"how-to-scale-up\",\"depth\":3,\"text\":\"How to Scale Up:\"}]},{\"id\":\"scaling-with-the-imperative-method\",\"depth\":2,\"text\":\"Scaling with the Imperative Method\",\"children\":[{\"id\":\"how-it-works\",\"depth\":3,\"text\":\"How It Works:\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:6.Scale-Your-App:2.Lab.md\",\"_source\":\"content\",\"_file\":\"6.Scale-Your-App/2.Lab.md\",\"_extension\":\"md\"},\"hash\":\"BB5dHpwzN6\"}";

export { _2_Lab as default };
//# sourceMappingURL=2.Lab5.mjs.map

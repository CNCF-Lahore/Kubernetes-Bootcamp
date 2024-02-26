// ROLLUP_NO_REPLACE 
 const _1_YourFirstApp = "{\"parsed\":{\"_path\":\"/deploy-an-app/your-first-app\",\"_dir\":\"deploy-an-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Deploy Your First Application on Kubernetes\",\"description\":\"Welcome to the exciting journey of deploying your first application on a Kubernetes cluster! If you've ever wondered how modern applications ensure reliability and scalability, you're about to dive into one of the core practices that make it possible.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"deploy-your-first-application-on-kubernetes\"},\"children\":[{\"type\":\"text\",\"value\":\"Deploy Your First Application on Kubernetes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Welcome to the exciting journey of deploying your first application on a Kubernetes cluster! If you've ever wondered how modern applications ensure reliability and scalability, you're about to dive into one of the core practices that make it possible.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"understanding-deployments-in-kubernetes\"},\"children\":[{\"type\":\"text\",\"value\":\"Understanding Deployments in Kubernetes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Think of a \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Deployment\"}]},{\"type\":\"text\",\"value\":\" in Kubernetes as your personal assistant for managing your application. It takes care of starting your app, making sure it's running on the cluster, and stepping in to fix things if something goes wrong. This is a big leap from the old days when applications were manually started, and if something failed, well, it was up to you to notice and fix it.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Deployments automate the process of managing your application instances across the cluster's Nodes (the machines running your app). If a Node encounters a problem, the Deployment is like a vigilant guardian that quickly replaces the affected instance, ensuring your service remains available.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"the-self-healing-mechanism\"},\"children\":[{\"type\":\"text\",\"value\":\"The Self-Healing Mechanism\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This self-healing mechanism is a game-changer. It means that your application can recover from hardware failures, maintenance, and other disruptions automatically. Deployments keep your app resilient and available, letting you sleep well at night knowing your app can take care of itself.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"lets-deploy-your-first-app\"},\"children\":[{\"type\":\"text\",\"value\":\"Let's Deploy Your First App!\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Deploying an application on Kubernetes involves packaging your app into a container and telling Kubernetes how to run it. We'll use a simple NodeJS application as our example, but the concepts apply to any application you might want to deploy.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"what-youll-need\"},\"children\":[{\"type\":\"text\",\"value\":\"What You'll Need:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Kubectl\"}]},{\"type\":\"text\",\"value\":\": This is the command-line tool that lets you communicate with your Kubernetes cluster. Think of it as your bridge to the Kubernetes world. \"},{\"type\":\"element\",\"tag\":\"em\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This tool is already configured to your Sandbox\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"A Containerized Application\"}]},{\"type\":\"text\",\"value\":\": Your app needs to be packaged in a container format supported by Kubernetes. For our example, we'll use a Docker container.\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"the-application\"},\"children\":[{\"type\":\"text\",\"value\":\"The Application\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"We have already configured an image for you; feel free to use it:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"code\":\"docker pull ghcr.io/cncf-lahore/nodejs-app:latest\\n\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"docker pull ghcr.io/cncf-lahore/nodejs-app:latest\\n\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"deploying-the-app\"},\"children\":[{\"type\":\"text\",\"value\":\"Deploying the App\"}]},{\"type\":\"element\",\"tag\":\"ol\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Prepare Your Application\"}]},{\"type\":\"text\",\"value\":\": Make sure your application is containerized and ready to go. If you're following our example, clone the GitHub repository to get the Dockerfile and source code.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Use Kubectl\"}]},{\"type\":\"text\",\"value\":\": With your application containerized, you'll use Kubectl to create a Deployment on your Kubernetes cluster. This process tells Kubernetes how to run your app, how many instances you want, and how to manage them.\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"next-steps\"},\"children\":[{\"type\":\"text\",\"value\":\"Next Steps\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Now that you have a basic understanding of what a Deployment is and how it works, it's time to put this knowledge into action. Head over to the tutorial to deploy your first app on Kubernetes. Follow the steps, and you'll see your application come to life on your very own Kubernetes cluster.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Happy deploying! 🚀\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"understanding-deployments-in-kubernetes\",\"depth\":2,\"text\":\"Understanding Deployments in Kubernetes\",\"children\":[{\"id\":\"the-self-healing-mechanism\",\"depth\":3,\"text\":\"The Self-Healing Mechanism\"}]},{\"id\":\"lets-deploy-your-first-app\",\"depth\":2,\"text\":\"Let's Deploy Your First App!\",\"children\":[{\"id\":\"what-youll-need\",\"depth\":3,\"text\":\"What You'll Need:\"},{\"id\":\"the-application\",\"depth\":3,\"text\":\"The Application\"},{\"id\":\"deploying-the-app\",\"depth\":3,\"text\":\"Deploying the App\"},{\"id\":\"next-steps\",\"depth\":3,\"text\":\"Next Steps\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:3.Deploy-an-App:1.Your-First-App.md\",\"_source\":\"content\",\"_file\":\"3.Deploy-an-App/1.Your-First-App.md\",\"_extension\":\"md\"},\"hash\":\"BSXVRr6o0k\"}";

export { _1_YourFirstApp as default };
//# sourceMappingURL=1.Your-First-App.mjs.map

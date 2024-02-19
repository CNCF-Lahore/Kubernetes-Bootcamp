// ROLLUP_NO_REPLACE 
 const scaleInAndOut = "{\"parsed\":{\"_path\":\"/scale-your-app/scale-in-and-out\",\"_dir\":\"scale-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Scale In And Out\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"understanding-scaling\"},\"children\":[{\"type\":\"text\",\"value\":\"Understanding Scaling\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In this module, we delve into scaling your application within a Kubernetes environment. Scaling is a critical aspect of managing applications, ensuring they can handle varying loads of traffic. Kubernetes simplifies this process through Deployments and Services, enabling both scale-out (increasing the number of replicas) and scale-in (decreasing the number of replicas) operations.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling in Kubernetes is primarily managed by adjusting the number of replicas in a Deployment. A replica represents an instance of your application running on a Pod. By increasing the number of replicas, you can scale out to handle more traffic. Conversely, reducing the number of replicas will scale in your application, reducing resources used when demand is lower.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"architecture-of-scaling\"},\"children\":[{\"type\":\"text\",\"value\":\"Architecture of Scaling\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling Out (Up)\"}]},{\"type\":\"text\",\"value\":\": Creates new Pods and schedules them to Nodes with available resources, ensuring your application can handle increased load.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling In (Down)\"}]},{\"type\":\"text\",\"value\":\": Removes Pods, reducing the number of instances to match the desired state, conserving resources.\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Kubernetes Services play a crucial role in this process. A Service acts as a load balancer, distributing incoming traffic across all Pods of a Deployment. It continuously monitors the running Pods through endpoints, directing traffic only to available Pods, ensuring efficient load distribution and high availability.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"how-to-scale-your-application\"},\"children\":[{\"type\":\"text\",\"value\":\"How to Scale Your Application\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"creating-a-deployment-with-multiple-replicas\"},\"children\":[{\"type\":\"text\",\"value\":\"Creating a Deployment with Multiple Replicas\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can specify the number of replicas at the creation of a Deployment:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl create deployment <deployment-name> --image=<image-name> --replicas=<number-of-replicas>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" create\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --image=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"image-name\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --replicas=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"number-of-replicas\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"scaling-an-existing-deployment\"},\"children\":[{\"type\":\"text\",\"value\":\"Scaling an Existing Deployment\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To adjust the number of replicas for an existing Deployment, use the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"kubectl scale\"}]},{\"type\":\"text\",\"value\":\" command:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling Out\"}]},{\"type\":\"text\",\"value\":\": Increase the number of replicas\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl scale deployment <deployment-name> --replicas=<desired-number-of-replicas>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" scale\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --replicas=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"desired-number-of-replicas\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling In\"}]},{\"type\":\"text\",\"value\":\": Decrease the number of replicas\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl scale deployment <deployment-name> --replicas=<desired-number-of-replicas>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" scale\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --replicas=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"desired-number-of-replicas\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"div\",\"props\":{\"style\":\"display: flex; overflow-x: auto;\"},\"children\":[{\"type\":\"text\",\"value\":\"\\n  \"},{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"src\":\"path_to_your_first_image.jpg\",\"style\":\"max-width: 100%; flex: 0 0 auto;\"},\"children\":[]},{\"type\":\"text\",\"value\":\"\\n  \"},{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"src\":\"path_to_your_second_image.jpg\",\"style\":\"max-width: 100%; flex: 0 0 auto;\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"checking-the-status-of-the-scaling-process\"},\"children\":[{\"type\":\"text\",\"value\":\"Checking the Status of the Scaling Process\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To monitor the status of your Deployment and the number of running replicas, use:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get deployments <deployment-name>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployments\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This command provides information about the Deployment, including the desired and current number of replicas.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"autoscaling-beyond-the-basics\"},\"children\":[{\"type\":\"text\",\"value\":\"Autoscaling (Beyond the Basics)\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"While manual scaling provides control over the number of replicas, Kubernetes also supports autoscaling. This feature automatically adjusts the number of Pod replicas based on CPU usage or other metrics, although it's beyond the scope of this basic tutorial. Autoscaling ensures that your application has the resources it needs when demand spikes, without manual intervention.\"}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"understanding-scaling\",\"depth\":2,\"text\":\"Understanding Scaling\",\"children\":[{\"id\":\"architecture-of-scaling\",\"depth\":3,\"text\":\"Architecture of Scaling\"}]},{\"id\":\"how-to-scale-your-application\",\"depth\":2,\"text\":\"How to Scale Your Application\",\"children\":[{\"id\":\"creating-a-deployment-with-multiple-replicas\",\"depth\":3,\"text\":\"Creating a Deployment with Multiple Replicas\"},{\"id\":\"scaling-an-existing-deployment\",\"depth\":3,\"text\":\"Scaling an Existing Deployment\"},{\"id\":\"checking-the-status-of-the-scaling-process\",\"depth\":3,\"text\":\"Checking the Status of the Scaling Process\"}]},{\"id\":\"autoscaling-beyond-the-basics\",\"depth\":2,\"text\":\"Autoscaling (Beyond the Basics)\"}]}},\"_type\":\"markdown\",\"_id\":\"content:6.Scale-Your-App:scale-In-and-Out.md\",\"_source\":\"content\",\"_file\":\"6.Scale-Your-App/scale-In-and-Out.md\",\"_extension\":\"md\"},\"hash\":\"WVNgl5SsxC\"}";

export { scaleInAndOut as default };
//# sourceMappingURL=scale-In-and-Out.mjs.map

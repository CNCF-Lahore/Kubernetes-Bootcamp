// ROLLUP_NO_REPLACE 
 const _1_scaleInAndOut = "{\"parsed\":{\"_path\":\"/scale-your-app/scale-in-and-out\",\"_dir\":\"scale-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Understanding Scaling\",\"description\":\"In this module, we delve into scaling your application within a Kubernetes environment. Scaling is a critical aspect of managing applications, ensuring they can handle varying loads of traffic. Kubernetes simplifies this process through Deployments and Services, enabling both scale-out (increasing the number of replicas) and scale-in (decreasing the number of replicas) operations.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"understanding-scaling\"},\"children\":[{\"type\":\"text\",\"value\":\"Understanding Scaling\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In this module, we delve into scaling your application within a Kubernetes environment. Scaling is a critical aspect of managing applications, ensuring they can handle varying loads of traffic. Kubernetes simplifies this process through Deployments and Services, enabling both scale-out (increasing the number of replicas) and scale-in (decreasing the number of replicas) operations.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling in Kubernetes is primarily managed by adjusting the number of replicas in a Deployment. A replica represents an instance of your application running on a Pod. By increasing the number of replicas, you can scale out to handle more traffic. Conversely, reducing the number of replicas will scale in your application, reducing resources used when demand is lower.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"architecture-of-scaling\"},\"children\":[{\"type\":\"text\",\"value\":\"Architecture of Scaling\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling Out (Up)\"}]},{\"type\":\"text\",\"value\":\": Creates new Pods and schedules them to Nodes with available resources, ensuring your application can handle increased load.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling In (Down)\"}]},{\"type\":\"text\",\"value\":\": Removes Pods, reducing the number of instances to match the desired state, conserving resources.\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Kubernetes Services play a crucial role in this process. A Service acts as a load balancer, distributing incoming traffic across all Pods of a Deployment. It continuously monitors the running Pods through endpoints, directing traffic only to available Pods, ensuring efficient load distribution and high availability.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"how-to-scale-your-application\"},\"children\":[{\"type\":\"text\",\"value\":\"How to Scale Your Application\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"creating-a-deployment-with-multiple-replicas\"},\"children\":[{\"type\":\"text\",\"value\":\"Creating a Deployment with Multiple Replicas\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can specify the number of replicas at the creation of a Deployment:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl create deployment <deployment-name> --image=<image-name> --replicas=<number-of-replicas>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" create\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --image=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"image-name\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --replicas=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"number-of-replicas\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"scaling-an-existing-deployment\"},\"children\":[{\"type\":\"text\",\"value\":\"Scaling an Existing Deployment\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To adjust the number of replicas for an existing Deployment, use the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"kubectl scale\"}]},{\"type\":\"text\",\"value\":\" command:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling Out\"}]},{\"type\":\"text\",\"value\":\": Increase the number of replicas\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl scale deployment <deployment-name> --replicas=<desired-number-of-replicas>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" scale\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --replicas=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"desired-number-of-replicas\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Scaling In\"}]},{\"type\":\"text\",\"value\":\": Decrease the number of replicas\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl scale deployment <deployment-name> --replicas=<desired-number-of-replicas>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" scale\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --replicas=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"desired-number-of-replicas\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"checking-the-status-of-the-scaling-process\"},\"children\":[{\"type\":\"text\",\"value\":\"Checking the Status of the Scaling Process\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To monitor the status of your Deployment and the number of running replicas, use:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get deployments <deployment-name>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployments\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This command provides information about the Deployment, including the desired and current number of replicas.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"autoscaling-beyond-the-basics\"},\"children\":[{\"type\":\"text\",\"value\":\"Autoscaling (Beyond the Basics)\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"While manual scaling provides control over the number of replicas, Kubernetes also supports autoscaling. This feature automatically adjusts the number of Pod replicas based on CPU usage or other metrics, although it's beyond the scope of this basic tutorial. Autoscaling ensures that your application has the resources it needs when demand spikes, without manual intervention.\"}]},{\"type\":\"text\",\"value\":\"\\n\\n\\n\\n\"},{\"type\":\"element\",\"tag\":\"meta\",\"props\":{\"charSet\":\"UTF-8\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"meta\",\"props\":{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"title\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Slide Presentation\"}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"\\n  .slide-container {\\n    display: flex;\\n    overflow-x: scroll;\\n    scroll-snap-type: x mandatory;\\n    -webkit-overflow-scrolling: touch;\\n    gap: 20px; /* Adds space between slides */\\n    padding: 20px; /* Adds some padding around slides */\\n    box-sizing: border-box;\\n  }\\n  .slide-container::-webkit-scrollbar {\\n    display: none; /* Hides scrollbar for webkit browsers */\\n  }\\n  .slide {\\n    flex: 0 0 auto;\\n    width: 100%;\\n    scroll-snap-align: start;\\n    border-radius: 10px; /* Optional: rounds corners of slides */\\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Optional: adds shadow for depth */\\n    transition: transform 0.5s ease-in-out; /* Smooth transition for scaling */\\n  }\\n  .slide:hover {\\n    transform: scale(1.05); /* Scales up slide on hover for a dynamic effect */\\n  }\\n  img {\\n    max-width: 100%;\\n    height: auto;\\n    display: block;\\n    border-radius: 10px; /* Ensures the img fits the slide's rounded corners */\\n  }\\n\"}]},{\"type\":\"text\",\"value\":\"\\n\\n\\n\"},{\"type\":\"element\",\"tag\":\"div\",\"props\":{\"className\":[\"slide-container\"]},\"children\":[{\"type\":\"text\",\"value\":\"\\n  \"},{\"type\":\"element\",\"tag\":\"div\",\"props\":{\"className\":[\"slide\"]},\"children\":[{\"type\":\"text\",\"value\":\"\\n    \"},{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"src\":\"https://raw.githubusercontent.com/CNCF-Lahore/Kubernetes-Bootcamp/main/asserts/module_05_scaling1-2.svg\",\"alt\":\"Scaling Slide 1\"},\"children\":[]},{\"type\":\"text\",\"value\":\"\\n  \"}]},{\"type\":\"text\",\"value\":\"\\n  \"},{\"type\":\"element\",\"tag\":\"div\",\"props\":{\"className\":[\"slide\"]},\"children\":[{\"type\":\"text\",\"value\":\"\\n    \"},{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"src\":\"https://raw.githubusercontent.com/CNCF-Lahore/Kubernetes-Bootcamp/main/asserts/module_05_scaling2.svg\",\"alt\":\"Scaling Slide 2\"},\"children\":[]},{\"type\":\"text\",\"value\":\"\\n  \"}]}]},{\"type\":\"text\",\"value\":\"\\n\\n\"},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"architecture-of-scaling\",\"depth\":2,\"text\":\"Architecture of Scaling\"},{\"id\":\"how-to-scale-your-application\",\"depth\":2,\"text\":\"How to Scale Your Application\",\"children\":[{\"id\":\"creating-a-deployment-with-multiple-replicas\",\"depth\":3,\"text\":\"Creating a Deployment with Multiple Replicas\"},{\"id\":\"scaling-an-existing-deployment\",\"depth\":3,\"text\":\"Scaling an Existing Deployment\"},{\"id\":\"checking-the-status-of-the-scaling-process\",\"depth\":3,\"text\":\"Checking the Status of the Scaling Process\"}]},{\"id\":\"autoscaling-beyond-the-basics\",\"depth\":2,\"text\":\"Autoscaling (Beyond the Basics)\"}]}},\"_type\":\"markdown\",\"_id\":\"content:6.Scale-Your-App:1.scale-In-and-Out.md\",\"_source\":\"content\",\"_file\":\"6.Scale-Your-App/1.scale-In-and-Out.md\",\"_extension\":\"md\"},\"hash\":\"CVVL89LnL7\"}";

export { _1_scaleInAndOut as default };
//# sourceMappingURL=1.scale-In-and-Out.mjs.map

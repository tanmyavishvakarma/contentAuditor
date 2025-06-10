const policyTemplate = `

## Contents

1. [Purpose](#1-purpose)  

2. [Scope](#2-scope)
  
3. [Terms and Definitions](#3-terms-and-definitions)
  
4. [Context of the Organization](#4-context-of-the-organization)
  
5. [Leadership](#5-leadership)
  
6. [Planning](#6-planning)
  
7. [Support](#7-support)
  
8. [Operation](#8-operation)
  
9. [Performance Evaluation](#9-performance-evaluation)
  
10. [Improvement](#10-improvement)
  
11. [Document Security Classification](#11-document-security-classification)
  
12. [Non-Compliance](#12-non-compliance)
  
13. [Schedule](#13-schedule)

<div style="page-break-before: always;"></div>

## 1. Purpose

This document outlines our organization's guidelines and processes for developing, deploying, and maintaining systems involving Artificial Intelligence (AI) technologies.  These guidelines and processes are intended to ensure that AI systems are developed and used responsibly, ethically, and in compliance with applicable regulations. This manual outlines a framework for managing the AI lifecycle. By adhering to the principles and practices outlined here, we aim to maximize the benefits of AI and innovation while minimizing potential risks and adverse impacts. 

## 2. Scope

This document extends the scope of the Information Security Management System (ISMS) to include the Artificial Intelligence Management System (AIMS) as part of our commitment to ensuring robust security measures for the AI systems deployed within the organization. This extension covers identifying, protecting, and managing risks associated with AI technologies, including the security of data used in training AI models, access control to AI systems, and ensuring the integrity of decision-making processes influenced by AI. The AIMS scope also includes the implementation of specific controls to address AI-related threats and vulnerabilities, ensuring compliance and aligning AI security management with our overarching information security governance. Through this extension, the organization aims to integrate AI governance within the broader ISMS framework to protect both sensitive data and AI operations while mitigating emerging risks associated with AI systems.

The organization overview is covered as part of the ISMS Manual.

## 3. Terms and Definitions

The scope of the terms and definitions of ISMS shall be applicable, along with the following terms and definitions, extended to include AI terms and definitions.

**Interested party:** Person or organization (3.1) that can affect, be affected by, or perceive itself to be affected by a decision or activity

**AI system impact assessment:** A Formal, documented process by which the impacts on individuals, groups of individuals, or both, and societies are identified, evaluated, and addressed by an organization developing, providing, or using products or services utilizing artificial intelligence 

**Data quality:** Characteristics of data that meet the organization’s data requirements for a specific context.

**AI Management System (AIMS):** A structured approach to managing the lifecycle of AI systems within an organization. It includes frameworks, policies, controls, and practices to ensure that AI systems are developed, deployed, operated, and retired in a secure, ethical, and compliant manner.

**AI Governance**: The framework of policies, processes, and standards for overseeing and directing AI system design, deployment, and performance, ensuring alignment with organizational goals, ethical guidelines, and regulatory requirements.

**AI Model Lifecycle**: The stages a machine learning or AI model goes through, from design, development, and deployment to monitoring, maintenance, and eventual decommissioning.

**Transparency**: The principle of making the design, decision-making process, and operational mechanisms of AI systems accessible and understandable to all relevant stakeholders, ensuring clarity in how AI models and algorithms function.

**Fairness**: Ensuring that AI systems are designed and operated without bias and that their decisions do not unfairly disadvantage any group, especially protected or vulnerable populations.

**Accountability**: The responsibility of an organization or individual to ensure that AI systems meet ethical standards, regulatory requirements, and performance expectations, and to address any adverse impacts caused by AI decision-making.

**Ethical AI**: The practice of designing, developing, and deploying AI systems that adhere to ethical principles, such as fairness, transparency, accountability, and privacy protection.

**Explainability**: The capability of an AI system to provide understandable and interpretable reasons for its decisions and actions, enabling users to trust and verify AI-driven outcomes.

**AI Risk Management**: The process of identifying, assessing, and mitigating risks associated with AI systems, including operational, legal, ethical, and reputational risks.

**Data Privacy & Protection in AI**: Ensuring that AI systems comply with data protection laws (such as GDPR and CCPA) and that personal and sensitive data is handled securely throughout the AI model’s lifecycle.

**AI Security**: Protecting AI systems from unauthorized access, manipulation, and exploitation. This includes securing AI models, data, algorithms, and the underlying infrastructure against threats.

**AI Ethics Committee**: A group within an organization responsible for overseeing the ethical implications of AI systems, reviewing AI projects to ensure compliance with ethical guidelines, and advising on the proper use of AI technologies.

**AI Impact Assessment**: A systematic evaluation of the potential impacts—positive or negative—that an AI system might have on individuals, organizations, and society, covering ethical, social, economic, and legal aspects.

**AI Compliance**: The process of ensuring that AI systems comply with relevant regulatory standards, ethical frameworks, and industry best practices.

**AI Audit**: A formal process of reviewing AI systems, processes, and decisions to ensure they meet regulatory, ethical, security, and operational standards.

**Bias in AI**: The presence of systematic and unfair discrimination in AI algorithms, which can result from biased training data or flawed design, leading to unfair outcomes for certain groups of people.

**Continuous Monitoring of AI Systems**: Ongoing observation of AI systems after deployment to detect issues such as performance degradation, bias, ethical concerns, and compliance risks.

**AI Performance Metrics**: Quantifiable measures used to assess the effectiveness, efficiency, and fairness of AI systems, such as accuracy, precision, recall, fairness, and robustness.

**AI System Validation**: The process of verifying that an AI system works as intended and adheres to the defined operational, ethical, and regulatory standards before it is deployed or put into production.

**Adversarial AI**: A type of attack where an adversary manipulates the inputs or environment of an AI system to mislead or disrupt its operations, potentially compromising the system’s security and integrity.

**AI Model Integrity**: The assurance that an AI model’s decisions and outputs are correct, ethical, and unbiased, with proper governance over data, algorithms, and training methods.

## 4. Context of the Organization

## **Understanding the Organization and Its Context** 

The organization is committed to developing, implementing, monitoring, and continually improving AI responsibly and ethically. 

The organization believes that AI should be used to enhance our services while respecting human rights, privacy & safety. The organization has implemented an Artificial Intelligence Management System (AIMS) that is compliant with ISO 42001, the international standard for Artificial Intelligence.  
Specifically, this section and its annexure set out:

* The context of the organization  
* External and Internal issues relevant to the purpose of The Organization  
* Interested parties relevant to AIMS and their needs and expectations

**Organization Context**

The organizational context of the organization is set out in the following sections. Given the fast-moving nature of the business and the market in which it operates, the context will change over time. This document will be reviewed on an annual basis, and any significant changes will be incorporated. The AIMS will also be updated to cater to the implications of such changes.

The role of the organization is as follows:

| AI Role  | Description |
| :---- | :---- |
| AI Engineer | Maintain technical documentation and logs of AI development activities. Address technical risks and vulnerabilities in AI implementations. The Engineering and Infrastructure teams oversee AI-related infrastructure, while some AI functions are outsourced. |
| Infra Operations Head Engineering Head/Team | Responsible for monitoring the engineering and cloud infrastructure. The Engineering and Infrastructure teams oversee AI-related infrastructure, while some AI functions are outsourced. |
| Head of Infosec & Compliance Program Head/Team | Responsible for the supervision and management of the infosec program. Coordinating activities for all compliances. Manage contracts and SLAs related to AI systems and services. Perform due diligence on AI service providers. |

**Climate Change**

While climate change is a relevant issue for the organization, the processing required for current AI systems designed and developed does not create any significant negative impact on the climate. Thus, while climate change is a relevant issue for the organization, there is no negative impact.

**AI System Life Cycle Stages**

**PoC (Proof of Concept)**

**Inception Stage** \\- During the inception stage, the organization works with the client in developing the “proof of concept.” During this stage, the organization demonstrates a schematic AI model. At this stage, the client is briefed on the external Gen AI model that is used and the generic algorithm. Once the client approves of this, the project moves to the next stage. In case the mandate is to build the entire AI System ground up, then a schematic AI model is shown, and the project Lifecycle is discussed with the client.

**Design and Development Stage & Verification and Validation Stage** \\- During the Design and Development stage, the organization makes a “proof of concept” model. This is done by applying an RAG System around the Foundational Model or by fine-tuning the AI model with the client-provided data. This AI model is then demonstrated to the client. In this stage, a detailed algorithm is taken up for design and development. The algorithm is written/created as per the project requirement. 

**Deployment Stage** – The deployment of the AI Model may happen in one of two ways:

* In the client environment: The AI model is deployed in the client environment. Here, the client is responsible for all the deployment, operation, and monitoring risks. The access control is restricted to the users of the client organization, and it is metered usage. This reduces the risk of access, adversarial attacks, etc., on the AI model. Here, the access control is with the client.  
* The Organization Environment: A separate, isolated environment is created for each client. This environment can only be accessed by authorized client users via a VPN. No one else from any other environment can access this instance of the AI Model. This is also on metered usage. This reduces the risk of access, adversarial attacks, etc., on the AI model. Here, the access controls are managed by the Organisation. The data is within the Organisation’s environment and does not leave the Organisation’s environment. No PII data is stored in this environment.  
    
  Operation and Monitoring – For the AI models in the organization’s environment, the AI model logs are maintained as per applicable requirements (contract and legal & regulatory requirements).

**Client Data Used for Fine-Tuning**

**Inception Stage**: During the Inception Stage, the organization focuses on understanding the client's needs and preparing for data integration into the AI model. This involves gathering detailed requirements to define objectives and performance metrics, evaluating the quality and relevance of the client's data, and agreeing on the data's scope and format. Preliminary steps for data preparation include discussing necessary preprocessing, such as cleaning and formatting. The client is briefed on how their data will be used, aligning it with the proof of concept. Once the plan for data usage is approved, the project progresses to the Design and Development Stage, ensuring both parties are aligned on the approach and expected outcomes.

**Design and Development Stage & Verification and Validation Stage** – In these stages, the organization uses client-provided data to fine-tune the proof-of-concept model. This involves the following steps:

* Data Collection: The client submits relevant datasets that are representative of their specific needs. This data may include various types of records or samples necessary for refining the AI model.  
* Data Preparation: The client data is preprocessed to ensure it is in a suitable format for fine-tuning. This includes cleaning, normalization, and transformation of the data as required.  
* Fine-tuning: The AI model is adjusted using the client’s data to enhance its performance and accuracy for the specific application. This stage involves integrating the client’s data into the model and adjusting the parameters based on the data.  
* Demonstration: A fine-tuned AI model, incorporating the client data, is demonstrated to the client to show the improvements and relevance of the model to their needs.

**Deployment Stage** – The deployment of the AI model, once ready, occurs as per the following options:

* Client’s Environment – When deployed in the client’s environment, the client is responsible for managing and securing the AI Model and the data. They ensure that the AI model operates correctly and meets the intended requirements. Data access and management are under the client's control.  
* Company’s Environment – If deployed within the company's environment, a separate isolated environment is created. If required, the client’s data used for fine-tuning remains within this secure environment. Access to this environment is restricted and managed by Org, ensuring that no PII data leaves this environment and that the data is protected against unauthorized access.

**Operation and Monitoring** – In the company's environment, the operation and monitoring of the AI model includes maintaining logs of the AI model's performance and activities as per contractual, legal, and regulatory requirements. This includes tracking how client data is used and ensuring compliance with data protection standards.  
Re-evaluate and Retirement – Clause 6.2.8 and 6.2.9 of ISO 22989 

**Re-evaluation Stage:**   
After the operation and monitoring stage, based on the results of the work of the AI system, the need for a reassessment can arise. During this stage, the organization will evaluate operating results, refine objectives, refine requirements, monitor, and review risks.

**Retirement Stage:**  
At some point, the AI system can become obsolete to the extent that repairs and updates are not good enough to meet new requirements. During this stage, the organization will decommission and discard/replace the product.

For more detailed information on roles, responsibilities, and controls across the AI system lifecycle, please refer to the AI System Lifecycle Document.

**Internal and External Issues:**   
Please refer to the “External & Internal Issues and Interested Parties” document for further details.

## **Understanding the needs and expectations of interested parties**

The organization has determined:

* The interested parties that are relevant to the AI management system  
* The relevant requirements of these interested parties   
* Which of these requirements will be addressed through the AI management system?

NOTE: Relevant interested parties can have requirements related to climate change. For AI Models that are made for the client's requirements, these requirements will be part of the SOW / Purchase Order. 

For more detailed information on AIMS External & Internal issues, please refer to the AI Impact Assessment and AIMS Scope Document.

## **Determining the scope of the AI management system**

The scope of an Artificial Intelligence Management System (AIMS) covers the provision of AI Strategy and Planning, AI Development and Deployment, AI Operations and Maintenance, and Testing. 

For more detailed information on the scope, please refer to the AIMS Scope & Objective Document.

AIMS processes shall be practiced in harmony with other processes of the Organization. The list of locations under the scope is given below.

|  | Location  | Address |
| :---- | ----- | ----- |
| Head office | <customer to update> | <customer to update> |
| Office Location 1 | <customer to update> | <customer to update> |

## **AI Management System** {#ai-management-system}

The organization has established, implemented, maintained, and continually improved and has documented the AI management system, including the processes needed and their interactions, according to the requirements of this document. 

## 5. Leadership

Leadership and Commitment

The organization has identified “AI Engineer” as the Top Management under the scope of AIMS. Top management demonstrates leadership and commitment concerning the AI management system as under:

| Sr. No | Leadership Element | Document Reference |
| :---: | ----- | ----- |
| 1 | Ensuring that the AI policy and AI objectives are established and are compatible with the strategic direction of the organization | AI Policy; AIMS Scope Document |
| 2 | Ensuring the integration of the AI management system requirements into the organization’s business processes | AIMS Process Documentation (identifies required processes and their integration with business operations) |
| 3 | Ensuring that the resources needed for the AI management system are available | Governance: AI Governance Structure Document Organization: AIMS Roles and Responsibilities People: AI Competence and Training Records Process: AIMS Process Documentation Technology: AI Tools and Infrastructure Provisioning Records |
| 4 | Communicating the importance of effective AI management and conforming to the AI management system requirements | Communication Records (e.g., Executive Briefings, Training Decks, Newsletters, Town Halls) |
| 5 | Ensuring that the AI management system achieves its intended result(s) | Governance Review Reports, Monitoring Mechanisms, Audit Reports, Corrective Action Logs, Management Review Minutes |
| 6 | Directing and supporting people to contribute to the effectiveness of the AI management system | AI Governance Charter: Roles and Responsibilities Documentation |
| 7 | Promoting continual improvement | Management Review Reports; AIMS Improvement Logs; Audit Follow-ups |
| 8 | Supporting other relevant roles to demonstrate their leadership as it applies to their areas of responsibility | Role-Based Access and Responsibility Matrix; AI Governance Documentation |

## **AI Policy**

The top management has established an AI policy that:

* It is appropriate for the organization  
  * AI objectives are set out by the organization  
  * Includes a commitment to meet applicable requirements  
  * Includes a commitment to continual improvement of the AI management system.

The AI policy is:

* Available as documented information   
  * Aligned with other organizational policies  
  * Communicated within the organization  
  * Available to interested parties, as appropriate

The organization has considered the Control objectives and controls provided in the AI policy. The AI Policy is available in the centralized portal.

## **Roles, Responsibilities, and Authorities** {#roles,-responsibilities,-and-authorities}

The Top management has ensured that the responsibilities and authorities for relevant roles are assigned and communicated within the organization. Top management has assigned the responsibility and authority for:

* Ensure that the AI management system conforms to the requirements of this document.   
  * Reporting on the performance of the AI management system to top management and the Governance Team.

While assigning the roles and responsibilities, the top management has considered Clause 5.3, Annex A \\- A.3.,2, and Annex A \\- A.4.6 in ISO 42001:2023. The organization has also considered that  the Implementation guidance for this control is provided in Annex B \\- B.3.2 and Annex B.4.6 of ISO 42001:2023

The AIMS roles and responsibilities are defined in the Roles and Responsibilities Document.

While allocating audit responsibilities, it is ensured that the independence of the audit is maintained.  The organization has ensured that the role holders are competent for the roles. The competencies of the role holders are managed internally.

## 6. Planning

## **Actions to Address Risks and Opportunities**

## **General**

When planning for the AI management system, the organization has considered the issues referred to in 4.1 above and the requirements referred to in 4.2 above, and determined the risks and opportunities that need to be addressed:

* Give assurance that the AI management system can achieve its intended result(s)  
  * Prevent or reduce undesired effects  
  * Achieving continual improvement

Please refer to the “External & Internal Issues and Interested Parties” document for further details.

The organization has established and maintained AI risk criteria that support:

* Distinguishing acceptable from unacceptable risks  
  * Performing AI risk assessments  
  * Conducting AI risk treatment  
  * Assessing AI risk impacts

The organization has determined the risks and opportunities according to:

* The domain and application context of an AI system  
  * The intended use  
  * The external and internal context described in 4.1

NOTE: 

* Considerations to determine the amount and type of risk that an organization is willing to pursue or retain are established.   
* More than one AI system can be considered in the scope of the AI management system. In this case, the determination of opportunities and uses is performed for each AI system or grouping of AI systems.

The organization has planned:

* Actions to address these risks and opportunities  
  * How to:  
  * Integrate and implement the actions into its AI management system processes  
  * Evaluate the effectiveness of these actions. 

The organization retains documented information on actions taken to identify and address AI risks and AI opportunities.

The organization has defined the above in its AI Risk and System Impact Assessment Document. Refer to the AIMS AI Risk and System Impact Assessment document for details.

### **AI Risk Assessment**

The organization has defined and established an AI risk assessment process (AIMS AI Risk and System Impact Assessment document), which is aligned with the Risk Processes of the organization:

1. Is informed by and aligned with the AI policy (see 5.2) and AI objectives (see 6.2)

NOTE: When assessing the consequences as part of 6.1.2 d) 1), the organization utilizes the AI system impact assessment as indicated in 6.1.4 below

2. It is designed such that repeated AI risk assessments can produce consistent, valid, and comparable results.  
3. Identifies risks that aid or prevent achieving its AI objectives  
4. Risk Analysis \\- analyzes the AI risks to:  
     
   * Assess the potential consequences to the organization, individuals, and societies that would result if the identified risks were to materialize.  
   * Assess, where applicable, the realistic likelihood of the identified risks  
   * Determine the levels of risk

   

5. Risk Evaluation \\- evaluates the AI risks to:  
   * Compare the results of the risk analysis with the risk criteria (see 6.1.1)  
   * Prioritize the assessed risks for risk treatment.  
   * The organization retains documented information about the AI risk assessment process.

   

### **AI Risk Treatment**

Taking the risk assessment results above into account, the organization has defined an AI risk treatment process in the AI risk assessment process document, where it:

* Select appropriate AI Risk Treatment Options.  
  * Determines all controls that are necessary to implement the AI risk treatment options chosen and compares the controls with those in Annex A of ISO 42001:2023 to verify that no necessary controls have been omitted. 


NOTE: The organization refers to the controls defined in Annex A of ISO 42001:2023 for meeting organizational objectives and addressing risks related to the design and use of AI systems.

* Consider the controls from Annex A of ISO 42001:2023 that are relevant for the implementation of the AI risk treatment options.  
  * Identifies if additional controls are necessary beyond those in Annex A of ISO 42001:2023 to implement all risk treatment options  
  * Consider the guidance in Annex B – ISO 42001:2023 for the implementation of controls determined. 


NOTE: Implicit Inclusion of Control Objectives in Controls (ISO 42001:2023) – Control objectives are implicitly included in the controls chosen. The organization can select an appropriate set of control objectives and controls from Annex A of ISO 42001:2023. It is understood that the Annex A controls in the ISO 42001:2023 are not exhaustive, and additional control objectives and controls may be needed. If different or additional controls are necessary beyond those in Annex A, the organization will design such controls or take them from any other existing sources. Such additional controls, if required, will be approved by the Infosec Officer. 

* Produces a statement of applicability that contains the necessary controls \\[see b), c), and d)\\] and justifies the inclusion and exclusion of controls. Justification for exclusion can include where the controls are not deemed necessary by the risk assessment and where they are not required by (or are subject to exceptions under) applicable external requirements.


NOTE: The organization provides documented justifications for excluding any control objectives in general or for specific AI systems, whether those listed in Annex A or established by the organization itself. These will be in the Statement of Applicability.

* Formulate an AI risk treatment plan.  
  * This should be reviewed by the appropriate stakeholders for the AI risk treatment plan and acceptance of the residual AI risks. The necessary controls shall be:  
1. Aligned to the objectives in 6.2  
2. Available as documented information  
3. Communicated within the organization  
4. Available to interested parties, as appropriate  
5. Will retain documented information about the AI risk treatment process

### 

### **AI System Impact Assessment**

The organization has defined a process for assessing the potential consequences for individuals or groups of individuals, or both, and societies that can result from the development, provision, or use of AI systems.

The AI system impact assessment will determine the potential consequences an AI system’s deployment, intended use, and foreseeable misuse have on individuals or groups of individuals, or both, and societies.

The AI system impact assessment will consider the specific technical and societal context where the AI system is deployed and applicable jurisdictions.

The result of the AI system impact assessment will be documented. Where appropriate, the result of the system impact assessment can be made available to relevant interested parties as defined by the company.

The organization will consider the results of the AI system impact assessment in the risk assessment (see 6.1.2). 

NOTE: In some contexts (such as safety or privacy-critical AI systems), the organization can require that discipline-specific AI system impact assessments (e.g., safety, privacy, or security impact) be performed as part of the overall risk management activities of an organization.

AI Objectives & Planning to Achieve Them  
The organization has established AI objectives at relevant functions and levels.  
The AI objectives:

* Are consistent with the AI policy (see Clause 5.2)

* Are measurable (where practicable)

* Consider applicable requirements, such as:  
1. Legal and regulatory requirements  
2. Contractual obligations  
3. Organizational goals and risk appetite  
4. Requirements as per ISO/IEC 42001:2023

* Are monitored at defined intervals

* Are communicated to the appropriate interested parties

* Are reviewed and updated as necessary

* Are maintained as documented information

Refer to the AI Objectives Document for complete details.  
When planning how to achieve the AI objectives, the organization determines:

* What will be done

* What resources will be required?

* Who will be responsible?

* When will it be completed

* How will the results be evaluated

AI objectives are defined both at the organizational level and at the individual AI project level:

* Organizational-level objectives are developed, reviewed, and approved by relevant stakeholders and are documented in the AI Objectives Document.  
* Project-level objectives are defined, reviewed, and approved by respective project stakeholders.

Once approved, the objectives are formally communicated within the company.

## **Planning of Changes** {#planning-of-changes}

When the organization determines the need for changes to the AI management system, the changes are carried out in a planned manner.

A Change is initiated by the initiator through an organizational change management process. Once it is approved, it is presented to the company. Post this approval, the change to the AI Management System is carried out. The outcomes are presented to the company.

## 7. Support

## **Resources**

The organization determines and provides the resources needed for the establishment, implementation, maintenance, and continual improvement of the AI management system.  
The resources required by the organization are identified and provided. For example: 

* **Governance** \\- The AI Governance Structure is created  
* **Organization Structure** \\- The AIMS Organizational Roles and Responsibilities are created  
* **People** \\- The AI Expertise is identified, and it is ensured that they are competent.   
* **Process** \\- AIMS Process Documentation has been established and maintained  
* **Technology** \\- Required Technology has been made available   
* **AI Tools** are provided to projects\\\\products

## **Competence**

The organization has:

* Determined the necessary competence of the person(s) doing work under its control that affects its AI performance  
* Ensuring that these resources are competent based on appropriate education, training, or experience  
* Where applicable, take actions to acquire the necessary competence, and evaluate the effectiveness of the actions taken.

Appropriate documented information shall be available as evidence of competence.  
Organisation-level Competencies are aligned to the Roles and Responsibilities Matrix as defined under 5.3 above. 

## **Awareness**

Associates doing work under the organization’s control are made aware of:

* The AI policy (see 5.2)  
* Their contribution to the effectiveness of the AI management system, including the benefits of improved AI performance  
* The implications of not conforming to the AI management system requirements.

## **Communication**

The organization has determined the internal and external communication requirements relevant to the AI management system, including:

* What will it communicate  
* When to communicate  
* With whom to communicate  
* How to communicate

| Sr. No. | Stakeholder | Communication Protocol |
| :---- | :---- | :---- |
| 1 | Legal and Regulatory  | As per the requirements of the law/regulation. This is guided by the Legal Team |
| 2 | Contractual  | As per each contract / SLA / SOW, etc, with the client. This is done at the project level |
| 3 | Internal – Management Communication – Project Level | Project-level monitoring and Communication are done within the project as per project requirements. This is decided by the Project Head |
| 4 | Internal – Management Communication  | Communication with the AI Engineer’s Head happens periodically on various parameters, including project details, AI Performance, Monitoring and Measurement Results, Internal Audit Results, Technological Changes, Changes in Internal and External Context, legal and Regulatory Changes, any specific Customer-related issues, etc. |
| 5 | Governing Body  | Communication with the Infosec Officer happens periodically on various parameters, including AIMS Performance, Reporting of Concerns, Escalations, Wins and Concerns, Technological Changes, Changes in Internal and External Context, legal and Regulatory Changes, any specific Customer-related issues, etc. |
| 6 | Other Routine Communications | Other routine communications are done as per the appropriate processes, e.g., Audit, Incident Management, Reporting of Concerns, Change Management, etc. |

## **Documented Information**

### **General**

The company's AI management system includes:

* Documented information required by this document  
* Documented information determined by the organization as being necessary for the effectiveness of the AI management system.

NOTE: While documenting the AI management system, consideration has been given to:

* The size of the  organization and the type of activities, processes, products, and services  
* The complexity of processes and their interactions  
* The competence of people

  ### **Creating and Updating Documented Information**

When creating and updating documented information, the organization has ensured appropriate:

* Identification and description (e.g., a title, date, author, or reference number);  
* Format (e.g., language, software version, graphics) and media (e.g., paper, electronic);  
* Review and approval for suitability and adequacy. 

  ### 

### **Control of Documented Information**

Documented information required by the AI management system and by this document is controlled to ensure:

* It is available and suitable for use, where and when it is needed  
* It is adequately protected (e.g., from loss of confidentiality, improper use, or loss of integrity)

For the control of documented information, the organization has addressed the following activities, as applicable.

* Distribution, access, retrieval, and use  
* Storage and preservation, including preservation of legibility  
* Control of changes (e.g., version control);  
* Retention and disposition.

Documented information of external origin determined by the organization to be necessary for the planning and operation of the AI management system shall be identified as appropriate and controlled. The following documents are identified as documented information of external origin:

           AI Body of Knowledge

* ISO 42001:2023  
* NIST AI RMF

 Legal and Regulatory 

* The EU AI Act (as applicable)  
* Any other laws and regulations as applicable

 Project Level

* Project Level Customer Contracts / SOW / SLAs as applicable  
* Documentation of Project Level Partner and resource providers (e.g., AI Platform Provider /Foundational and other model providers) 

## 8. Operation

## **Operational Planning and Control**

The organization plans, implements, and controls the processes needed to meet requirements, and to implement the actions determined in 6 above, by:

* Establishing criteria for the processes  
* Implementing control of the processes by the criteria


The organization implements the controls determined according to 6.1.3 that are related to the operation of the AI management system. The effectiveness of these controls is monitored as appropriate, and corrective actions are considered if the intended results are not achieved. 

Documented information is available to the extent necessary to have confidence that the processes have been carried out as planned.

The organization controls planned changes and reviews the consequences of unintended changes, taking action to mitigate any adverse effects, as necessary. This is done through the Change Management as indicated in 6.3 above. The organization ensures that externally provided processes, products, or services that are relevant to the AI management system are controlled.

## **AI Risk Assessment**

The organization performs AI risk assessments by 6.1.2 at planned intervals or when significant changes are proposed or occur. These are documented as mentioned in 6.1.2 

The organization retains documented information on the results of all AI risk assessments. 

## **AI Risk Treatment**

The organization implements the AI risk treatment plan according to 6.1.3 and verifies its effectiveness.

When risk assessments identify new risks that require treatment, a risk treatment process by 6.1.3 is performed for these risks.

When risk treatment options as defined by the risk treatment plan are not effective, these treatment options are reviewed and revalidated following the risk treatment process according to 6.1.3, and the risk treatment plan(s) are updated.

The organization retains documented information on the results of all AI risk treatments.

## **AI System Impact Assessment** {#ai-system-impact-assessment}

The organization performs AI system impact assessments according to 6.1.4 when significant changes are proposed to occur.

The organization retains documented information on the results of all AI system impact assessments.

## 9. Performance Evaluation

## **Monitoring, Measurement, Analysis, and Evaluation**

The organization determines:

* What needs to be monitored and measured  
* The methods for monitoring, measurement, analysis, and evaluation, as applicable, are used to ensure valid results.  
* When the monitoring and measuring shall be performed  
* When the results from monitoring and measurement are analyzed and evaluated.

This is done at the organizational level and presented in the Management Review.  
Project-level monitoring and measurement are done at the Project level. Documented information is available as evidence of the results.   
The organization evaluates the performance and the effectiveness of the AI management system. As appropriate, this is presented to the relevant levels of management.

## **Internal Audit**

### **General**

The organization conducts internal audits annually to provide information on whether the AI management system conforms to:

* The company’s requirements for its AI management system  
* The requirements of this document  
* Is effectively implemented and maintained

  ### **Internal Audit Program**

The organization plans, establishes, implements, and maintains an audit program, including the frequency, methods, responsibilities, planning requirements, and reporting. This is done as per the Internal Audit Programme.  
‍   
When establishing the internal audit program, the organization shall consider the importance of the processes concerned and the results of previous audits. The organization:

* Defines the audit objectives, criteria, and scope for each audit  
* Select auditors and conduct audits to ensure objectivity and impartiality of the audit process  
* Ensure that the results of audits are reported to the relevant managers

Documented information is available as evidence of the implementation of the audit program and the audit results.

## **Management Review**

## **General**

Top management reviews the organization’s AI management system, at least annually, to ensure its continuing suitability, adequacy, and effectiveness.

**Management Review Inputs**

The management review includes:

* The status of actions from previous management reviews  
* Changes in external and internal issues that are relevant to the AI management system  
* Changes in the needs and expectations of interested parties that are relevant to the AI management system  
* Information on the AIMS performance  
* Nonconformities and corrective actions  
* Monitoring and measurement results  
* Audit results  
* Opportunities for continual improvement.

### **Management Review Results**

The results of the management review will include decisions related to continual improvement opportunities and any need for changes to the AI management system. Documented information is available as evidence of the results of management reviews.

## 10. Improvement

## **Continuous Improvement**

The organization continually improves the suitability, adequacy, and effectiveness of the AI management system. 

## **10. 2 Nonconformity and Corrective Action** {#10.-2-nonconformity-and-corrective-action}

When a nonconformity occurs, the company reacts to the nonconformity and, as applicable:

* Take action to control and correct it  
* Deals with the consequences

Evaluates the need for action to eliminate the cause(s) of the nonconformity, so that it does not recur or occur elsewhere, by:

* Reviewing the nonconformity  
* Determining the causes of the nonconformity  
* Determining if similar nonconformities exist or can potentially occur.  
    
  Implements any action needed:  
* Review the effectiveness of any corrective action taken  
* Make changes to the AI management system, if necessary


Corrective actions are appropriate to the effects of the nonconformities encountered. Documented information is available as evidence of:

* The nature of the nonconformities and any subsequent actions taken  
* The results of any corrective action. 


## 11. Document Security Classification

This document is classified as “Company Internal” under the company's Data Classification Policy. Access is limited to authorized personnel involved in the management, oversight, or operation of the AIMS, and any unauthorized disclosure, alteration, or distribution is strictly prohibited.

## 12. Non-Compliance

Compliance with this document shall be monitored through internal audits, automated system checks, and stakeholder feedback. Any violation of the provisions outlined in this AIMS Manual may result in disciplinary action, including termination of employment or contractual engagement. The nature of the disciplinary action shall be determined based on the severity, intent, and impact of the violation. All confirmed instances of non-compliance shall be documented, investigated, and resolved by the company's established AIMS procedures.

## 13. Schedule

This document should be reviewed annually and whenever significant organizational changes occur.  

End of AIMS Manual. For version history, please see the next page.

 `

module.exports = policyTemplate

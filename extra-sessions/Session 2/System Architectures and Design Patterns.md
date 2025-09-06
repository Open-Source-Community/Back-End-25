# System Architechture and Design patterns
## Monorepo, Microservices & SOLID Principles

## Topics Covered

### 1. **Monorepo vs. Polyrepo**

#### 🔹 What is a Polyrepo?

A **Polyrepo** is a development model where every service or project lives in its own repository, making it common in microservices architectures. It gives independence and flexibility but requires strong DevOps practices to manage dependencies and consistency across repos.

---

#### 🔹 Diagram – Polyrepo Flow

```
📦 frontend-repo/
📦 backend-repo/
📦 mobile-repo/
📦 shared-utils-repo/
```

Separate repos, harder dependency management, but easier team isolation.

---

#### 🔹 What is a Monorepo?

A **monorepo** is a single repository that contains multiple projects or services, managed together.

* Example: Storing frontend, backend, and shared libraries in one Git repo.

---
#### 🔹 Diagram – Monorepo Flow

```
📦 monorepo/
 ├── frontend/         -> React, Vue, Angular
 ├── backend/          -> Node.js, Express, NestJS
 ├── shared/           -> utils, models, types
 └── mobile/           -> React Native / Flutter
```

**One repo, one CI/CD pipeline, shared code across projects.**

---

#### 🔹 Benefits

* **Shared dependencies** → reduce duplication.
* **Code reusability** → shared utilities and libraries.
* **Consistent tooling** → one lint, test, build pipeline.
* **Easier refactoring** → update cross-project code in one place.

#### 🔹 Challenges

* **Build performance** → large repos can slow down CI/CD.
* **Tooling complexity** → requires special tools for efficiency.
* **Access control** → harder to isolate teams when repo is large.

#### 🔹 Tools

* [Nx](https://nx.dev) → optimized builds, dependency graph.
* [Turborepo](https://turbo.build/repo) → caching & task running.
* [Lerna](https://lerna.js.org) → package-based monorepo management.

#### 🔹 When to Use Monorepo vs Polyrepo

* **Monorepo:** Best for teams working on tightly coupled services/libraries.
* **Polyrepo:** Best for independent projects, large distributed teams.

---

### 2. **Microservices Architecture**

#### 🔹 What are Microservices?

A **microservice** is a small, independent service that focuses on a single business capability.
Each service has its own database and communicates via APIs or messaging.

--- 

#### 🔹 Diagram – Microservices vs Monolith

**Monolith**

```
[Frontend] --> [Backend Server: Auth + Orders + Payments + Inventory] --> [Database]
```

**Microservices**

```
[Frontend]
   |
   v
[API Gateway] ---> [Auth Service] ---> [Auth DB]
               ---> [Orders Service] ---> [Orders DB]
               ---> [Payments Service] -> [Payments DB]
               ---> [Inventory Service]-> [Inventory DB]
```

Each service is independent, can scale and deploy separately.

--- 

#### 🔹 Advantages

* **Scalability** → scale individual services independently.
* **Independent deployments** → faster release cycles.
* **Fault isolation** → one service crashing won’t kill the system.
* **Tech flexibility** → each service can use its own stack.

#### 🔹 Disadvantages

* **Complexity** → managing distributed systems is hard.
* **Data consistency** → each service has its own DB, eventual consistency issues.
* **Deployment overhead** → requires DevOps maturity (Docker, Kubernetes).
* **Monitoring** → needs observability tools (logs, tracing, metrics).

#### 🔹 Key Patterns

* **API Gateway** → single entry point for clients.
* **Service Discovery** → dynamic service lookup (e.g., Consul, Eureka).
* **Database per Service** → each microservice owns its data.
* **Event-driven communication** → Kafka, RabbitMQ, NATS.

#### 🔹 Comparison

* **Monolith:** Easy to start, hard to scale.
* **Modular Monolith:** Single repo/app but structured by modules.
* **Microservices:** Distributed, scalable, but operationally complex.

---

### 3. **SOLID Principles**

SOLID is a set of **five object-oriented design principles** that make systems more maintainable and scalable.

#### 1️⃣ Single Responsibility Principle (SRP)

* **Definition:** A class/module should have only one reason to change.
* **Example:** Don’t mix business logic with database logic.

#### 2️⃣ Open/Closed Principle (OCP)

* **Definition:** Software entities should be open for extension but closed for modification.
* **Example:** Add new payment methods by extending an interface, not rewriting existing code.

#### 3️⃣ Liskov Substitution Principle (LSP)

* **Definition:** Subtypes should be replaceable by their base type without breaking functionality.
* **Example:** A Square should behave like a Rectangle if it inherits from it.

#### 4️⃣ Interface Segregation Principle (ISP)

* **Definition:** Clients should not be forced to depend on interfaces they do not use.
* **Example:** Instead of one giant interface, split into smaller role-specific interfaces.

#### 5️⃣ Dependency Inversion Principle (DIP)

* **Definition:** Depend on abstractions, not concrete implementations.
* **Example:** Use interfaces for database connections instead of hardcoding SQL/NoSQL.

---

### 4. **System Design Fundamentals**

* **Scalability** → vertical (bigger server) vs horizontal (more servers).
* **Caching** → use Redis, CDN to reduce DB load.
* **Load Balancing** → distribute traffic (round-robin, least connections).
* **Database Strategies** →

  * SQL vs NoSQL
  * Sharding (splitting data across DBs)
  * Replication (master/slave).
* **API Design** → REST (simple), GraphQL (flexible queries), gRPC (fast binary).

---
## Summary 

### Monorepo vs Microservices – Comparison Table

| Aspect                 | **Monorepo**                                                                   | **Microservices**                                                                     |
| ---------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **Definition**         | A single repository that contains multiple projects/services managed together. | An architectural style where applications are split into small, independent services. |
| **Focus**              | Code organization and repo management.                                         | System design and service architecture.                                               |
| **Deployment**         | Typically deployed as one unit or as modules inside the same system.           | Each service is deployed independently.                                               |
| **Scalability**        | Limited (mostly vertical scaling).                                             | High – services can scale individually (horizontal scaling).                          |
| **Team Collaboration** | Easy to share code, enforce standards, and maintain consistency.               | Teams can work independently with less dependency on others.                          |
| **Technology Stack**   | Usually one shared stack across all projects.                                  | Each service can use a different stack (polyglot).                                    |
| **Dependencies**       | Centralized – easier to manage but can grow heavy.                             | Decentralized – each service manages its own dependencies.                            |
| **Complexity**         | Simpler setup, but harder to isolate services.                                 | Complex – requires service discovery, API gateways, and orchestration.                |
| **Build/CI/CD**        | One pipeline for all projects, can be slow as repo grows.                      | Independent pipelines per service, but needs strong DevOps practices.                 |
| **Data Management**    | Shared database or modules.                                                    | Database per service (data isolation).                                                |
| **Communication**      | Internal function calls (direct imports).                                      | Network-based (REST, gRPC, or messaging).                                             |
| **Fault Tolerance**    | Failure in one module may crash the whole system.                              | Failures are isolated to the affected service.                                        |
| **Best For**           | Small to medium teams/projects with tight integration.                         | Large-scale systems requiring scalability, flexibility, and independent teams.        |


---
## 5. Expected Outcomes

By the end of this session, participants will:
 - Understand **monorepo trade-offs** and when to use them.
 - Be able to explain **microservices pros/cons**.
 - Apply **SOLID principles** to improve code quality.
 - Be familiar with **DDD, system design patterns, and scalability strategies**.

---

## Recommended Resources

* Book: *Clean Architecture* – Robert C. Martin (Uncle Bob).
* Book: *Designing Data-Intensive Applications* – Martin Kleppmann.
* Book: *Microservices Patterns* – Chris Richardson.
* [Awesome Monorepo Tools](https://monorepo.tools)
* [System Design Primer](https://github.com/donnemartin/system-design-primer)



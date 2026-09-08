# Database Design

## 1. Users

Stores information about citizens and administrators.

Fields:

- id
- name
- email
- password
- role
- created_at

## 2. Complaints

Stores civic complaints submitted by citizens.

Fields:

- id
- title
- description
- category
- status
- priority
- location
- image_url
- user_id
- assigned_department
- created_at
- updated_at

## 3. Comments

Stores comments made by citizens and administrators
on complaints.

Fields:

- id
- complaint_id
- user_id
- comment
- created_at

## 4. Complaint Status History

Stores every status change made to a complaint.

Fields:

- id
- complaint_id
- old_status
- new_status
- changed_by
- changed_at

## Relationships

- One user can create many complaints.
- One complaint belongs to one user.
- One complaint can have many comments.
- One user can add many comments.
- One complaint can have many status history records.
- One user can make many status changes.

             USER
              │
              ▼
       ┌──────────────┐
       │ React        │
       │ Frontend     │
       └──────┬───────┘
              │
           HTTP/REST
              │
              ▼
       ┌──────────────┐
       │ Spring Boot  │
       │ Backend      │
       └──────┬───────┘
              │
           JPA/Hibernate
              │
              ▼
       ┌──────────────┐
       │ PostgreSQL   │
       │ Database     │
       └──────────────┘

#layered Architecture :
React
↓
Controller
↓
Service
↓
Repository
↓
Database

This is called layered architecture.

##Maven A build tool + dependency manager for our Java project.is a dependency management tool for spring boot project/libraries can be managed and downloaded with the help of it
For example, we'll eventually have something like:

##<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-web</artifactId> ##</dependency>

Maven sees that dependency and handles downloading and managing the required libraries.

compile
↓
test
↓
package
↓
run/build application

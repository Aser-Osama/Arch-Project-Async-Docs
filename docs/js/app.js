
    const schema = {
  "asyncapi": "2.6.0",
  "info": {
    "title": "University Registration Async Events",
    "version": "1.0.0",
    "description": "This document describes the asynchronous event communication across university microservices using message brokers.\nThe system complements RESTful APIs by decoupling event-based operations like registration and conflict approval.\n"
  },
  "servers": {
    "production": {
      "url": "broker.university.edu",
      "protocol": "amqp",
      "description": "Production Message Broker (RabbitMQ/Kafka)"
    }
  },
  "channels": {
    "registration.requests": {
      "description": "Event sent when a student submits a course registration request.",
      "publish": {
        "summary": "Student registration submission",
        "operationId": "sendRegistrationRequest",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "studentId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "courses": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "timestamp": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "<anonymous-message-1>"
        }
      }
    },
    "registration.responses": {
      "description": "Event published by the registration worker on successful processing.",
      "subscribe": {
        "summary": "Registration success response",
        "operationId": "receiveRegistrationResponse",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "studentId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "status": {
                "type": "string",
                "enum": [
                  "registered"
                ],
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "registeredCourses": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-10>"
                },
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "timestamp": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-6>"
          },
          "x-parser-message-name": "<anonymous-message-2>"
        }
      }
    },
    "registration.failures": {
      "description": "Event published by the registration worker on failure.",
      "subscribe": {
        "summary": "Registration failure event",
        "operationId": "receiveRegistrationFailure",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "studentId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "status": {
                "type": "string",
                "enum": [
                  "failed"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "reason": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "timestamp": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-16>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-12>"
          },
          "x-parser-message-name": "<anonymous-message-3>"
        }
      }
    },
    "registrar.conflict-approvals": {
      "description": "Event sent by registrar service to initiate conflict approval.",
      "publish": {
        "summary": "Conflict approval event",
        "operationId": "sendConflictApproval",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "conflictId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "studentId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "courseId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "note": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "approvedBy": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "timestamp": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-23>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-17>"
          },
          "x-parser-message-name": "<anonymous-message-4>"
        }
      }
    },
    "registrar.conflict-responses": {
      "description": "Event sent after conflict approval is processed.",
      "subscribe": {
        "summary": "Conflict approval result",
        "operationId": "receiveConflictResponse",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "conflictId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "status": {
                "type": "string",
                "enum": [
                  "approved",
                  "rejected"
                ],
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "processedAt": {
                "type": "string",
                "format": "date-time",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-24>"
          },
          "x-parser-message-name": "<anonymous-message-5>"
        }
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  
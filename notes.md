## Requirements

## Essentialism - example of how to write a DB abstraction - see dbDesign for tables

Login > talk about core **values** in life

list of 15 values

organize the 3 they find most important

values value_ratings (user, value, rating)

write (**value justification**) - a sentence or paragraph - of why it is important

Next Pane >>>>

has boxes with **activities** they do during the day

**link** activities with values

activities not linked to values are assigned "not aligned"

## A good data model

- captures all the data the system needs
- captures ONLY the data the system needs (abstraction)
- reflects reality
- flexible to evolve with the system
- guarantees data integrity
- is driven by the way the data will be used

## Components of a Good Data Model

- entities = tables
- attributes = columns
- relationships = foreign keys

## Mapping to REST Concepts

- Resources are Entity in Table
- Properties are Attributes in the Columns
- Sub-routes (Users/:id/values) are Relationships > Foreign Keys

## Workflow

- identify entities: (look for the nouns in the explanation of needs; draw a square `[ ]`)
- identify attributes: (columns needed) (in example above the attributes are **values** ,**activities**, **value_activities**, **users**)
- identify relationships: (draw lines connecting tables to each other `[ ] * ---------- 1 [ ]`)
- model two entities at a time

## Relationships

- one to one: not very common
- one to many: this is it - will use this mostly
- many to many: fake

## Mantras

- pick two entities at a time, define how they relate to each other
- one to many ? -> Foreign Key!
- foreign key? -> the Many Side
- many to many ? -> third table (whenever there is a many-to-many relationship, there needs to be a third table)
- many to many table CAN have extra information

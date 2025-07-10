# 🚀 Aplicación de Consulta de Países con Next.js y Tailwind CSS 🌍

## Desarrollado por: Andres Felipe Larrotta Pino

¡Hola! Bienvenido al repositorio de esta prueba técnica. Esta aplicación es un desarrollo Full Stack con Next.js (utilizando el App Router), estilizado con Tailwind CSS, y consume la API pública de RestCountries para mostrar y filtrar información sobre países.

### 🌟 Visión General del Desarrollo por Features

Para mantener el proyecto organizado, escalable y con un historial de cambios claro, la implementación se gestionó a través de un flujo de trabajo basado en features (Feature Branching). Cada nueva funcionalidad o mejora fue desarrollada en una rama dedicada, lo que permitió trabajar de manera aislada y segura, minimizando conflictos y facilitando la revisión del código.

Cada feature (característica) o tarea específica tuvo su propia rama, partiendo de la rama principal `master`. Una vez completada y probada la funcionalidad, la rama de la feature fue fusionada de nuevo a la rama principal (en este caso, main) a través de un merge.

Este enfoque asegura que el historial del proyecto sea lineal y fácil de seguir, reflejando el progreso incremental y las decisiones de diseño a lo largo del desarrollo.

### 🌳 Flujo de Ramas y Merges Detallado

A continuación, se detalla el flujo de las ramas y los merges realizados, explicando el propósito de cada rama y cómo se integró al proyecto principal. Esto te permitirá ver el proceso de desarrollo paso a paso y entender cómo se construyó cada funcionalidad.

#### 1. master (Rama Principal)

Propósito: Es la rama estable que siempre representa la versión desplegable de la aplicación. Todos los merges finales de las features se realizan sobre esta rama.

#### 2. dev

Propósito: Es la rama que une todas las funcionalidades features, evitando manipular la rama master y asi no tener errores en producción.

#### 3. feat-[component]

Propósito: Implementar las funcionalidadas de cada parte del proyecto, asi teniendo un orden y mejor flujo para el progreso.


Este proceso de desarrollo por features garantiza un código base limpio, un historial de Git comprensible y una implementación estructurada de cada requisito.

¡Gracias por revisar el proyecto!

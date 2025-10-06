
export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  chapter: string;
  rationales?: string[];
}

// A single exam instance (a simulacrum)
export interface Simulacrum {
  id: string;
  title: string;
  questions: Question[];
}

// The overall configuration for the exam type
export interface ExamSuiteConfig {
  id: string;
  suiteTitle: string; // e.g., "Simulador de Examen de Certificación ISTQB"
  timeLimitMinutes: number;
  passingScorePercentage: number;
  simulacra: Simulacrum[];
}

export const examSuite: ExamSuiteConfig = {
  id: "istqb_foundation",
  suiteTitle: "Simulador de Examen de Certificación ISTQB",
  timeLimitMinutes: 60,
  passingScorePercentage: 65,
  simulacra: [
    {
      id: "istqb_exam_a",
      title: "Examen de Práctica A (Oficial)",
      questions: [
        {
          chapter: "1. Fundamentos de las Pruebas",
          questionText: "¿Cuál de las siguientes afirmaciones describe un objetivo de prueba válido?",
          options: [
            "Demostrar que no hay defectos sin corregir en el sistema bajo prueba.",
            "Demostrar que no habrá fallos después de la implementación del sistema en producción.",
            "Reducir el nivel de riesgo del objeto de prueba y generar confianza en el nivel de calidad.",
            "Verificar que no hay combinaciones de entradas no probadas."
          ],
          correctAnswerIndex: 2
        },
        {
          chapter: "1. Fundamentos de las Pruebas",
          questionText: "¿Cuál de las siguientes opciones muestra un ejemplo de actividades de prueba que contribuyen al éxito?",
          options: [
            "Involucrar a los testers durante varias actividades del ciclo de vida de desarrollo de software (SDLC) ayudará a detectar defectos en los productos de trabajo.",
            "Los testers intentan no molestar a los desarrolladores mientras codifican, para que los desarrolladores escriban mejor código.",
            "La colaboración de los testers con los usuarios finales ayuda a mejorar la calidad de los informes de defectos durante la integración de componentes y las pruebas del sistema.",
            "Los testers certificados diseñarán casos de prueba mucho mejores que los testers no certificados."
          ],
          correctAnswerIndex: 0
        },
        {
          chapter: "1. Fundamentos de las Pruebas",
          questionText: "Ha sido asignado como tester a un equipo que produce un nuevo sistema de forma incremental. Ha notado que no se han realizado cambios en los casos de prueba de regresión existentes durante varias iteraciones y no se identificaron nuevos defectos de regresión. Su gerente está contento, pero usted no. ¿Qué principio de las pruebas explica su escepticismo?",
          options: ["Las pruebas se desgastan (Tests wear out)", "Falacia de ausencia de errores (Absence-of-errors fallacy)", "Los defectos se agrupan (Defects cluster together)", "Las pruebas exhaustivas son imposibles (Exhaustive testing is impossible)"],
          correctAnswerIndex: 0
        },
        {
          chapter: "1. Fundamentos de las Pruebas",
          questionText: "Usted trabaja en un equipo que desarrolla una aplicación móvil para pedir comida. En la iteración actual, el equipo decidió implementar la funcionalidad de pago. ¿Cuál de las siguientes actividades forma parte del análisis de pruebas?",
          options: [
            "Estimar que probar la integración con el servicio de pago llevará 8 días-persona.",
            "Decidir que el equipo debe probar si es posible compartir correctamente el pago entre muchos usuarios.",
            "Usar el análisis de valores límite (BVA) para derivar los datos de prueba para los casos de prueba que verifican el procesamiento correcto del pago para la cantidad mínima permitida a pagar.",
            "Analizar la discrepancia entre el resultado real y el resultado esperado después de ejecutar un caso de prueba que verifica el proceso de pago con una tarjeta de crédito, e informar un defecto."
          ],
          correctAnswerIndex: 1
        },
        {
          chapter: "1. Fundamentos de las Pruebas",
          questionText: "¿Cuáles de los siguientes factores (i-v) tienen una influencia SIGNIFICATIVA en el proceso de pruebas? i. El SDLC, ii. El número de defectos detectados en proyectos anteriores, iii. Los riesgos de producto identificados, iv. Nuevos requisitos regulatorios, v. El número de testers certificados en la organización.",
          options: [
            "i, ii tienen influencia significativa; iii, iv, v no.",
            "i, iii, iv tienen influencia significativa; ii, v no.",
            "ii, iv, v tienen influencia significativa; i, iii no.",
            "iii, v tienen influencia significativa; i, ii, iv no."
          ],
          correctAnswerIndex: 1
        },
        {
          chapter: "1. Fundamentos de las Pruebas",
          questionText: "¿Cuál de las siguientes tareas pertenece PRINCIPALMENTE a un rol de testing?",
          options: [
            "Configurar entornos de prueba e informar sobre la cobertura alcanzada.",
            "Mantener el backlog del producto.",
            "Diseñar soluciones para nuevos requisitos.",
            "Crear el plan de pruebas."
          ],
          correctAnswerIndex: 0
        },
        {
          chapter: "1. Fundamentos de las Pruebas",
          questionText: "¿Cuáles de las siguientes habilidades (i-v) son las MÁS importantes para un tester? i. Tener conocimiento del dominio, ii. Crear una visión del producto, iii. Ser un buen jugador de equipo, iv. Planificar y organizar el trabajo del equipo, v. Pensamiento crítico.",
          options: [
            "ii y iv son importantes; i, iii y v no lo son.",
            "i, iii y v son importantes; ii y iv no lo son.",
            "i, ii y v son importantes; iii y iv no lo son.",
            "iii y iv son importantes; i, ii y v no lo son."
          ],
          correctAnswerIndex: 1
        },
        {
          chapter: "1. Fundamentos de las Pruebas",
          questionText: "¿Cómo se presenta el enfoque de 'todo el equipo' (whole team approach) en las interacciones entre testers y representantes de negocio?",
          options: [
            "Los representantes de negocio deciden sobre los enfoques de automatización de pruebas.",
            "Los testers ayudan a los representantes de negocio a definir la estrategia de prueba.",
            "Los representantes de negocio no son parte del enfoque de todo el equipo.",
            "Los testers ayudan a los representantes de negocio a crear pruebas de aceptación adecuadas."
          ],
          correctAnswerIndex: 3
        },
        {
          chapter: "2. Pruebas a lo largo del ciclo de vida",
          questionText: "Considere la siguiente regla: 'por cada actividad del SDLC hay una actividad de prueba correspondiente'. ¿En qué modelos de SDLC se cumple esta regla?",
          options: [
            "Solo en modelos de SDLC secuenciales.",
            "Solo en modelos de SDLC iterativos.",
            "Solo en modelos de SDLC iterativos e incrementales.",
            "En modelos de SDLC secuenciales, incrementales e iterativos."
          ],
          correctAnswerIndex: 3
        },
        {
          chapter: "2. Pruebas a lo largo del ciclo de vida",
          questionText: "¿Cuál de las siguientes afirmaciones describe MEJOR el enfoque de desarrollo guiado por pruebas de aceptación (ATDD)?",
          options: [
            "En ATDD, los criterios de aceptación se crean típicamente basados en el formato given/when/then.",
            "En ATDD, los casos de prueba se crean principalmente en las pruebas de componentes y están orientados al código.",
            "En ATDD, se crean pruebas basadas en criterios de aceptación para guiar el desarrollo del software relacionado.",
            "En ATDD, las pruebas se basan en el comportamiento deseado del software, lo que facilita que los miembros del equipo las entiendan."
          ],
          correctAnswerIndex: 2
        },
        {
          chapter: "2. Pruebas a lo largo del ciclo de vida",
          questionText: "¿Cuál de las siguientes opciones NO es un ejemplo del enfoque de 'desplazamiento a la izquierda' (shift left)?",
          options: [
            "Revisar los requisitos del usuario antes de que sean aceptados formalmente por las partes interesadas.",
            "Escribir una prueba de componente antes de que se escriba el código correspondiente.",
            "Ejecutar una prueba de eficiencia de rendimiento para un componente durante las pruebas de componentes.",
            "Escribir un script de prueba antes de configurar el proceso de gestión de la configuración."
          ],
          correctAnswerIndex: 3
        },
        {
          chapter: "2. Pruebas a lo largo del ciclo de vida",
          questionText: "¿Cuál de los siguientes argumentos usarías para convencer a tu gerente de organizar retrospectivas al final de cada ciclo de lanzamiento?",
          options: [
            "Las retrospectivas son muy populares hoy en día y los clientes apreciarían que las añadiéramos a nuestros procesos.",
            "Organizar retrospectivas ahorrará dinero a la organización porque los representantes de los usuarios finales no proporcionan feedback inmediato sobre el producto.",
            "Las debilidades del proceso identificadas durante la retrospectiva pueden ser analizadas y servir como una lista de tareas para el programa de mejora continua de procesos de la organización.",
            "Las retrospectivas abarcan cinco valores, incluyendo coraje y respeto, que son cruciales para mantener la mejora continua en la organización."
          ],
          correctAnswerIndex: 2
        },
        {
          chapter: "2. Pruebas a lo largo del ciclo de vida",
          questionText: "¿Qué tipos de fallos (1-4) se ajustan MEJOR a qué niveles de prueba (A-D)? 1. Fallos en el comportamiento del sistema que se desvía de las necesidades de negocio del usuario, 2. Fallos en la comunicación entre componentes, 3. Fallos en la lógica de un módulo, 4. Fallos en reglas de negocio no implementadas correctamente. A. Pruebas de componentes, B. Pruebas de integración de componentes, C. Pruebas de sistema, D. Pruebas de aceptación.",
          options: ["1D, 2B, 3A, 4C", "1D, 2B, 3C, 4A", "1B, 2A, 3D, 4C", "1C, 2B, 3A, 4D"],
          correctAnswerIndex: 0
        },
        {
          chapter: "2. Pruebas a lo largo del ciclo de vida",
          questionText: "Está probando una historia de usuario con tres criterios de aceptación: AC1, AC2 y AC3. AC1 está cubierto por el caso de prueba TC1, AC2 por TC2 y AC3 por TC3. El historial de ejecución de pruebas tuvo tres ejecuciones en tres versiones consecutivas del software. ¿Cuáles de las pruebas anteriores se ejecutan como pruebas de regresión? (Ver tabla en el PDF para el historial de ejecuciones)",
          options: ["Solo 4, 7, 8, 9", "Solo 5, 7", "Solo 4, 6, 8, 9", "Solo 5, 6"],
          correctAnswerIndex: 1
        },
        {
          chapter: "3. Pruebas Estáticas",
          questionText: "¿Cuál de los siguientes NO es un beneficio de las pruebas estáticas?",
          options: [
            "Tener una gestión de defectos menos costosa debido a la facilidad de detectar defectos más tarde en el SDLC.",
            "Corregir defectos encontrados durante las pruebas estáticas es generalmente mucho menos costoso que corregir defectos encontrados durante las pruebas dinámicas.",
            "Encontrar defectos de codificación que podrían no haberse encontrado solo realizando pruebas dinámicas.",
            "Detectar lagunas e inconsistencias en los requisitos."
          ],
          correctAnswerIndex: 0
        },
        {
          chapter: "3. Pruebas Estáticas",
          questionText: "¿Cuál de los siguientes es un beneficio del feedback temprano y frecuente?",
          options: [
            "Mejora el proceso de prueba para proyectos futuros.",
            "Obliga a los clientes a priorizar sus requisitos basados en riesgos acordados.",
            "Es la única manera de medir la calidad de los cambios.",
            "Ayuda a evitar malentendidos en los requisitos."
          ],
          correctAnswerIndex: 3
        },
        {
          chapter: "3. Pruebas Estáticas",
          questionText: "Las revisiones que se utilizan en su organización tienen los siguientes atributos: Hay un rol de escriba, el propósito principal es evaluar la calidad, la reunión es dirigida por el autor del producto de trabajo, hay preparación individual, se produce un informe de revisión. ¿Qué tipo de revisión es MÁS probable que se esté utilizando?",
          options: ["Revisión informal", "Walkthrough", "Revisión técnica", "Inspección"],
          correctAnswerIndex: 1
        },
        {
          chapter: "3. Pruebas Estáticas",
          questionText: "¿Cuál de estas afirmaciones NO es un factor que contribuye a revisiones exitosas?",
          options: [
            "Los participantes deben dedicar tiempo adecuado para la revisión.",
            "Dividir productos de trabajo grandes en partes pequeñas para que el esfuerzo requerido sea menos intenso.",
            "Los participantes deben evitar comportamientos que puedan indicar aburrimiento, exasperación u hostilidad hacia otros participantes.",
            "Los fallos encontrados deben ser reconocidos, apreciados y manejados objetivamente."
          ],
          correctAnswerIndex: 3
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "¿Cuál de las siguientes es una característica de las técnicas de prueba basadas en la experiencia?",
          options: [
            "Los casos de prueba se crean basados en información de diseño detallada.",
            "Los elementos probados dentro de la sección de código de la interfaz se utilizan para medir la cobertura.",
            "Las técnicas dependen en gran medida del conocimiento del tester sobre el software y el dominio del negocio.",
            "Los casos de prueba se utilizan para identificar desviaciones de los requisitos."
          ],
          correctAnswerIndex: 2
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "Está probando un formulario de búsqueda de apartamentos simplificado que solo tiene dos criterios de búsqueda: piso (con tres opciones) y tipo de jardín (con tres opciones). Solo los apartamentos en la planta baja pueden tener jardines. Desea aplicar particionamiento de equivalencia (EP) para cubrir cada tipo de piso y jardín. ¿Cuál es el número mínimo de casos de prueba para lograr una cobertura de EP del 100%?",
          options: ["3", "4", "5", "6"],
          correctAnswerIndex: 1
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "Está probando un sistema que calcula la calificación final de un curso para un estudiante. La calificación se asigna según reglas sobre el resultado final (0-50: suspenso, 51-60: suficiente, etc.). Dado un conjunto de casos de prueba (TC1: 91, TC2: 50, etc.), ¿cuál es la cobertura de Análisis de Valores Límite (BVA) de 2 valores para el resultado final que se logra con los casos de prueba existentes?",
          options: ["50%", "60%", "33.3%", "100%"],
          correctAnswerIndex: 0
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "Su tienda de alquiler diario de bicicletas favorita ha introducido un nuevo sistema de Gestión de Relaciones con el Cliente. Basándose ÚNICAMENTE en la descripción de las características, ¿cuál de las reglas de la tabla de decisión describe una situación imposible?",
          options: ["R4", "R2", "R6", "R8"],
          correctAnswerIndex: 3
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "Usted prueba un sistema cuyo ciclo de vida se modela mediante el diagrama de transición de estados que se muestra (INIT -> DEBUG -> OFF | INIT -> OPERATION -> ON HOLD -> OFF). El sistema comienza en el estado INIT y termina su operación en el estado OFF. ¿Cuál es el NÚMERO MÍNIMO de casos de prueba para lograr una cobertura de transiciones válidas?",
          options: ["4", "2", "7", "3"],
          correctAnswerIndex: 3
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "Su suite de pruebas alcanzó una cobertura de sentencias del 100%. ¿Cuál es la consecuencia de este hecho?",
          options: [
            "Cada instrucción en el código que contiene un defecto ha sido ejecutada al menos una vez.",
            "Cualquier suite de pruebas que contenga más casos de prueba que la suya también logrará una cobertura de sentencias del 100%.",
            "Cada ruta en el código ha sido ejecutada al menos una vez.",
            "Cada combinación de valores de entrada ha sido probada al menos una vez."
          ],
          correctAnswerIndex: 0
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "¿Cuál de las siguientes afirmaciones NO es cierta para las pruebas de caja blanca?",
          options: [
            "Durante las pruebas de caja blanca se considera la implementación completa del software.",
            "Las métricas de cobertura de caja blanca pueden ayudar a identificar pruebas adicionales para aumentar la cobertura del código.",
            "Las técnicas de prueba de caja blanca se pueden utilizar en pruebas estáticas.",
            "Las pruebas de caja blanca pueden ayudar a identificar lagunas en la implementación de los requisitos."
          ],
          correctAnswerIndex: 3
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "¿Cuál de las siguientes opciones describe MEJOR el concepto detrás de la adivinación de errores (error guessing)?",
          options: [
            "La adivinación de errores implica usar su conocimiento y experiencia sobre defectos encontrados en el pasado y errores típicos cometidos por los desarrolladores.",
            "La adivinación de errores implica usar su experiencia personal en desarrollo y los errores que cometió como desarrollador.",
            "La adivinación de errores requiere que imagine que es el usuario del objeto de prueba y adivine los errores que el usuario podría cometer al interactuar con él.",
            "La adivinación de errores requiere que duplique rápidamente la tarea de desarrollo para identificar el tipo de errores que un desarrollador podría cometer."
          ],
          correctAnswerIndex: 0
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "En su proyecto ha habido un retraso en el lanzamiento de una nueva aplicación y la ejecución de pruebas comenzó tarde. Usted tiene un conocimiento muy detallado del dominio y buenas habilidades analíticas. La lista completa de requisitos aún no se ha compartido con el equipo, pero la gerencia está pidiendo que se presenten algunos resultados de las pruebas. ¿Qué técnica de prueba se ajusta MEJOR a esta situación?",
          options: ["Pruebas basadas en listas de verificación (Checklist-based)", "Adivinación de errores (Error guessing)", "Pruebas exploratorias (Exploratory testing)", "Pruebas de ramas (Branch testing)"],
          correctAnswerIndex: 2
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "¿Cuál de las siguientes opciones describe MEJOR la forma en que se pueden documentar los criterios de aceptación?",
          options: [
            "Realizar retrospectivas para determinar las necesidades reales de las partes interesadas con respecto a una historia de usuario dada.",
            "Usar el formato given/when/then para describir una condición de prueba de ejemplo relacionada con una historia de usuario dada.",
            "Usar la comunicación verbal para reducir el riesgo de malinterpretar los criterios de aceptación por parte de otros.",
            "Documentar los riesgos relacionados con una historia de usuario dada en un plan de pruebas para facilitar las pruebas basadas en riesgos de una historia de usuario dada."
          ],
          correctAnswerIndex: 1
        },
        {
          chapter: "4. Técnicas de diseño de pruebas",
          questionText: "Considere la siguiente historia de usuario: 'Como Editor, quiero revisar el contenido antes de que se publique para poder asegurar que la gramática es correcta' y sus criterios de aceptación. ¿Cuál de los siguientes es el MEJOR ejemplo de una prueba ATDD para esta historia de usuario?",
          options: [
            "Probar si el editor puede guardar el documento después de eliminar el contenido de la página.",
            "Probar si el propietario del contenido puede iniciar sesión y hacer actualizaciones al contenido.",
            "Probar si el editor puede programar la publicación del contenido editado.",
            "Probar si el editor puede reasignar a otro editor para hacer actualizaciones."
          ],
          correctAnswerIndex: 0
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "¿Cómo añaden valor los testers a la planificación de iteraciones y lanzamientos?",
          options: [
            "Los testers determinan la prioridad de las historias de usuario a desarrollar.",
            "Los testers se centran solo en los aspectos funcionales del sistema a probar.",
            "Los testers participan en la identificación detallada de riesgos y la evaluación de riesgos de las historias de usuario.",
            "Los testers garantizan el lanzamiento de software de alta calidad a través del diseño temprano de pruebas durante la planificación del lanzamiento."
          ],
          correctAnswerIndex: 2
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "¿Cuáles de las siguientes opciones son criterios de salida para probar un sistema?",
          options: [
            "Se alcanza la densidad de defectos estimada y las pruebas de regresión están automatizadas.",
            "La preparación del entorno de pruebas.",
            "La capacidad de iniciar sesión en el objeto de prueba por parte del tester.",
            "Los requisitos se traducen al formato given/when/then."
          ],
          correctAnswerIndex: 0
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "Su equipo utiliza la técnica de estimación de tres puntos para estimar el esfuerzo de prueba para una nueva característica de alto riesgo. Se hicieron las siguientes estimaciones: estimación más optimista: 2 horas-persona; estimación más probable: 11 horas-persona; estimación más pesimista: 14 horas-persona. ¿Cuál es la estimación final?",
          options: ["9 horas-persona", "14 horas-persona", "11 horas-persona", "10 horas-persona"],
          correctAnswerIndex: 3
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "Está probando una aplicación móvil que permite a los usuarios encontrar un restaurante cercano según el tipo de comida que desean comer. Considere la lista de casos de prueba, prioridades (un número más pequeño significa una prioridad más alta) y dependencias. ¿Cuál de los siguientes casos de prueba debería ejecutarse en tercer lugar?",
          options: ["TC 003", "TC 005", "TC 002", "TC 001"],
          correctAnswerIndex: 0
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "Considere las siguientes categorías de prueba (1-4) y los cuadrantes de pruebas ágiles (A-D): 1. Pruebas de usabilidad, 2. Pruebas de componentes, 3. Pruebas funcionales, 4. Pruebas de fiabilidad. A. Cuadrante Q1: orientado a la tecnología, apoya al equipo de desarrollo. B. Cuadrante Q2: orientado al negocio, apoya al equipo de desarrollo. C. Cuadrante Q3: orientado al negocio, critica el producto. D. Cuadrante Q4: orientado a la tecnología, critica el producto. ¿Cómo se mapean las categorías de prueba a los cuadrantes?",
          options: ["1C, 2A, 3B, 4D", "1D, 2A, 3C, 4B", "1C, 2B, 3D, 4A", "1D, 2B, 3C, 4A"],
          correctAnswerIndex: 0
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "Durante un análisis de riesgos se identificó y evaluó el siguiente riesgo: Riesgo: El tiempo de respuesta es demasiado largo para generar un informe. Probabilidad de riesgo: media; impacto del riesgo: alto. Respuesta al riesgo: un equipo de pruebas independiente realiza pruebas de rendimiento durante las pruebas del sistema; una muestra seleccionada de usuarios finales realiza pruebas alfa y beta de aceptación antes del lanzamiento. ¿Qué medida se propone tomar en respuesta a este riesgo analizado?",
          options: ["Aceptación del riesgo", "Plan de contingencia", "Mitigación del riesgo", "Transferencia del riesgo"],
          correctAnswerIndex: 2
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "¿Qué herramienta puede ser utilizada por un equipo ágil para mostrar la cantidad de trabajo que se ha completado y la cantidad de trabajo total que queda para una iteración dada?",
          options: ["Criterios de aceptación", "Informe de defectos", "Informe de finalización de pruebas", "Gráfico de avance (Burndown chart)"],
          correctAnswerIndex: 3
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "Necesita actualizar uno de los scripts de prueba automatizados para que esté en línea con un nuevo requisito. ¿Qué proceso indica que crea una nueva versión del script de prueba en el repositorio de pruebas?",
          options: [
            "Gestión de la trazabilidad",
            "Pruebas de mantenimiento",
            "Gestión de la configuración",
            "Ingeniería de requisitos"
          ],
          correctAnswerIndex: 2
        },
        {
          chapter: "5. Gestión de Pruebas",
          questionText: "Recibió el siguiente informe de defectos de los desarrolladores indicando que la anomalía descrita no es reproducible. ¿Qué información crítica FALTA en este informe de prueba que habría sido útil para los desarrolladores?",
          options: [
            "Resultado esperado y resultado real",
            "Referencias y estado del defecto",
            "Entorno de prueba e ítem de prueba",
            "Prioridad y severidad"
          ],
          correctAnswerIndex: 2
        },
        {
          chapter: "6. Herramientas de Soporte para Pruebas",
          questionText: "¿Qué actividad de prueba apoya una herramienta de preparación de datos?",
          options: [
            "Monitorización y control de pruebas",
            "Análisis y diseño de pruebas",
            "Implementación y ejecución de pruebas",
            "Finalización de pruebas"
          ],
          correctAnswerIndex: 2
        },
        {
          chapter: "6. Herramientas de Soporte para Pruebas",
          questionText: "¿Qué elemento identifica correctamente un riesgo potencial de realizar la automatización de pruebas?",
          options: [
            "Puede introducir regresiones desconocidas en producción.",
            "Los esfuerzos suficientes para mantener el testware pueden no ser asignados correctamente.",
            "Las herramientas de prueba y su testware asociado pueden no ser suficientemente fiables.",
            "Puede reducir el tiempo asignado para las pruebas manuales."
          ],
          correctAnswerIndex: 1
        }
      ]
    },
    {
      id: "istqb_exam_b",
      title: "Examen de Práctica B (Oficial)",
      questions: [
        {
            "questionText": "¿Cuál de los siguientes es un ejemplo de por qué las pruebas son necesarias?",
            "options": [
                "Las pruebas dinámicas aumentan la calidad al hacer que los objetos de prueba fallen de maneras que los usuarios nunca podrían lograr.",
                "Las pruebas estáticas son utilizadas por los desarrolladores para identificar fallos en su código de programa antes de lo que se puede lograr con las pruebas dinámicas.",
                "El análisis estático proporciona evidencia a los clientes de que los elementos del sistema que no proporcionan salidas son aptos para su lanzamiento.",
                "Las revisiones aumentan la calidad de las especificaciones de requisitos y conducen a que se necesiten menos cambios en los productos de trabajo derivados."
            ],
            "correctAnswerIndex": 3,
            "chapter": "1. Fundamentos de las Pruebas",
            "rationales": [
                "No es correcto. A menudo es posible usar pruebas dinámicas para hacer que un objeto de prueba falle de maneras que nunca podrían ser logradas por los usuarios, como mediante la inyección de fallos. Sin embargo, si el fallo nunca puede ocurrir con usuarios finales reales, entonces identificarlo no es especialmente valioso, ya que las pruebas están destinadas en última instancia a mejorar el producto de trabajo para los usuarios finales. Dedicar tiempo a probar fallos que no pueden ocurrir con usuarios reales no es un uso eficiente del tiempo de un tester.",
                "No es correcto. Las pruebas estáticas en forma de análisis estático son utilizadas por los desarrolladores para identificar defectos en su código de programa antes de lo que se puede lograr a través de pruebas dinámicas. Sin embargo, nótese que las pruebas estáticas (y el análisis estático) se utilizan para detectar defectos, no fallos, que se encuentran mediante pruebas dinámicas. Por lo tanto, el uso del término 'fallos' hace que esta opción sea incorrecta.",
                "No es correcto. El análisis estático detecta directamente anomalías en el código, que pueden ser defectos, y esto normalmente es para el desarrollador, no para el cliente. Proporcionar evidencia para la liberación mediante el uso de análisis estático de elementos que no proporcionan salida no tiene sentido.",
                "Es correcto. Las revisiones son una forma de prueba estática que se puede aplicar desde el inicio del ciclo de vida de desarrollo de software y se utilizan para encontrar defectos que se pueden eliminar antes de que las actividades de desarrollo posteriores desperdicien esfuerzo en requisitos defectuosos. Si los defectos no se detectan y eliminan temprano, entonces cuando se encuentre el defecto, los productos de trabajo derivados, como el diseño y el código, deberán cambiarse, ya que se basaron en requisitos defectuosos."
            ]
        },
        {
            "questionText": "¿Cuál de las siguientes afirmaciones sobre aseguramiento de la calidad (QA) y/o control de calidad (QC) es correcta?",
            "options": [
                "El QA se realiza como parte de las pruebas.",
                "Las pruebas se realizan como parte del QC.",
                "Las pruebas son otro término para el QC.",
                "Las pruebas se realizan como parte del QA."
            ],
            "correctAnswerIndex": 1,
            "chapter": "1. Fundamentos de las Pruebas",
            "rationales": [
                "No es correcto. El QA se concentra en la mejora e implementación de procesos, utilizando un enfoque preventivo para evitar errores y defectos, mientras que las pruebas son una forma de QC que se utiliza para detectar defectos.",
                "Es correcto. El QC tiene como objetivo alcanzar niveles apropiados de calidad centrándose en la identificación y corrección de defectos del producto. Las pruebas son una parte significativa del QC y ayudan a descubrir estos defectos.",
                "No es correcto. Aunque las pruebas son una parte significativa del QC y ayudan a descubrir defectos, otras técnicas (no relacionadas con las pruebas) utilizadas en el QC incluyen métodos formales como la verificación de modelos y la prueba de corrección, así como la simulación y el prototipado.",
                "No es correcto. El QA se concentra en la mejora e implementación de procesos, utilizando un enfoque preventivo para evitar errores y defectos, mientras que las pruebas son una forma de QC que se utiliza para detectar defectos."
            ]
        },
        {
            "questionText": "Uno de los 'principios de las pruebas' establece que las pruebas exhaustivas son imposibles. ¿Cuál de los siguientes es un ejemplo de cómo abordar este principio en la práctica?",
            "options": [
                "Crear casos de prueba que cubran cada posible salida especificada.",
                "Documentar todas las posibles variaciones de entrada de prueba y priorizarlas según su importancia.",
                "Comenzar las pruebas lo antes posible con revisiones y otros enfoques de pruebas estáticas.",
                "Usar particionamiento de equivalencia y análisis de valores límite para generar casos de prueba."
            ],
            "correctAnswerIndex": 3,
            "chapter": "1. Fundamentos de las Pruebas",
            "rationales": [
                "No es correcto. El principio establece que no es factible probar todo excepto en casos triviales. Probar todo requeriría probar cada posible variación de entradas de prueba en todas las circunstancias diferentes, lo cual es generalmente inviable ya que habrá un número prácticamente infinito. Probar cada posible salida especificada no abordará este problema, ya que la relación entre entradas y salidas especificadas puede ser diferente para cada objeto de prueba. A veces puede haber un número prácticamente infinito de posibles salidas especificadas (p. ej., cuando hay varias variables que representan números reales), mientras que otras veces puede haber solo dos salidas especificadas, como con una sola variable que puede ser verdadera o falsa.",
                "No es correcto. El principio establece que no es factible probar cada posible variación de entradas de prueba en todas las circunstancias diferentes. Esto se debe a que para sistemas no triviales hay un número prácticamente infinito. Por lo tanto, en la práctica, documentar todas las posibles variaciones de entrada de prueba sería impracticable, ya que tomaría una cantidad infinita de tiempo.",
                "No es correcto. Comenzar las pruebas lo antes posible con revisiones y otros enfoques de pruebas estáticas no abordará el problema de que haya demasiados casos de prueba posibles. El principio de 'las pruebas tempranas ahorran tiempo y dinero' se refiere a corregir defectos tempranamente para prevenir la ocurrencia de defectos subsecuentes en productos de trabajo derivados, reduciendo así los costos y la probabilidad de fallos.",
                "Es correcto. El uso de particionamiento de equivalencia y análisis de valores límite para generar casos de prueba es una forma de abordar el principio, ya que estas técnicas de prueba proporcionan una manera sistemática de derivar un subconjunto finito de todos los posibles casos de prueba."
            ]
        },
        {
            "questionText": "¿Qué actividad de prueba implica trabajar con requisitos de datos de prueba, condiciones de prueba, requisitos del entorno de prueba y casos de prueba?",
            "options": [
                "Diseño de pruebas",
                "Ejecución de pruebas",
                "Análisis de pruebas",
                "Implementación de pruebas"
            ],
            "correctAnswerIndex": 0,
            "chapter": "1. Fundamentos de las Pruebas",
            "rationales": [
                "Es correcto. El diseño de pruebas implica el uso de condiciones de prueba para crear casos de prueba y otro testware necesario, como requisitos de datos de prueba y cartas de prueba para pruebas exploratorias. También se especifican los requisitos del entorno de prueba, incluyendo la infraestructura y las herramientas necesarias.",
                "No es correcto. La ejecución de pruebas implica ejecutar casos de prueba (como parte de los procedimientos de prueba), sin embargo, no cubre directamente el otro testware mencionado en la pregunta, como los requisitos de datos de prueba, los requisitos del entorno de prueba y las condiciones de prueba.",
                "No es correcto. El análisis de pruebas se utiliza para identificar las características que requieren pruebas. La base de pruebas se analiza y se define como condiciones de prueba, que luego se priorizan junto con los riesgos relacionados. Si bien esta actividad implica trabajar con condiciones de prueba, no cubre el otro testware mencionado en la pregunta, como los requisitos de datos de prueba, los requisitos del entorno de prueba y los casos de prueba.",
                "No es correcto. La implementación de pruebas incluye la generación de procedimientos de prueba, como scripts de prueba manuales y automatizados, que se crean a partir de casos de prueba y pueden ensamblarse en suites de pruebas. Los procedimientos de prueba se priorizan y organizan en un cronograma de ejecución de pruebas. Se crean los datos de prueba y se construye el entorno de prueba, y se verifica su configuración. Si bien esta actividad implica trabajar explícitamente con casos de prueba y puede usar requisitos de datos de prueba y requisitos del entorno de prueba para crear los datos de prueba y el entorno de prueba, no cubre las condiciones de prueba."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes es MÁS probable que impacte en cómo se realizan las pruebas para un objeto de prueba dado?",
            "options": [
                "El nivel promedio de experiencia del equipo de marketing de la organización.",
                "El conocimiento de los usuarios de que se está desarrollando un nuevo sistema para ellos.",
                "El número de años de experiencia de los miembros del equipo de pruebas.",
                "La estructura organizativa del usuario final para una aplicación comercial de streaming de música."
            ],
            "correctAnswerIndex": 2,
            "chapter": "1. Fundamentos de las Pruebas",
            "rationales": [
                "No es correcto. Es poco probable que el equipo de marketing de la organización realice muchas pruebas (aunque en algunas organizaciones pueden estar involucrados en pruebas de aceptación), por lo que su nivel promedio de experiencia (la mayor parte de la cual sería en marketing) es poco probable que impacte en cómo se realizan las pruebas para un objeto de prueba dado.",
                "No es correcto. Es poco probable que el nivel de conocimiento de los usuarios de que se está construyendo un nuevo sistema para ellos afecte cómo se realizan las pruebas. Cualquier participación del usuario que pueda afectar cómo se realizan las pruebas es más probable que sea resultado de decisiones tomadas por los testers, el cliente y el gerente del proyecto.",
                "Es correcto. El número de años de experiencia de los miembros del equipo de pruebas de rendimiento ayudará a determinar las capacidades y el conocimiento (p. ej., de diferentes herramientas y tipos de defectos) que los miembros del equipo aplicarán cuando estén probando.",
                "No es correcto. La estructura organizativa de los diferentes usuarios finales (que pueden ser variados) cambiará entre usuarios. Por lo tanto, puede que ni siquiera se conozca cuando se está probando la aplicación, y la estructura organizativa del usuario final puede tener poco efecto en cómo se realizan las pruebas."
            ]
        },
        {
            "questionText": "¿Cuál de las siguientes afirmaciones es un ejemplo CORRECTO del valor de la trazabilidad?",
            "options": [
                "La trazabilidad entre los riesgos mitigados y los casos de prueba aprobados proporciona un medio para determinar el nivel de riesgo residual.",
                "La trazabilidad entre los requisitos del usuario y los resultados de la ejecución de pruebas proporciona un medio para medir el progreso del proyecto frente a los objetivos de negocio.",
                "La trazabilidad entre los testers y los casos de prueba fallidos proporciona un medio para determinar el nivel de habilidad de los testers.",
                "La trazabilidad entre los riesgos identificados y las condiciones de prueba escritas proporciona un medio para determinar qué riesgos vale la pena probar."
            ],
            "correctAnswerIndex": 1,
            "chapter": "1. Fundamentos de las Pruebas",
            "rationales": [
                "No es correcto. La trazabilidad entre los riesgos mitigados y los casos de prueba aprobados proporciona poca información, porque para ser mitigados (mediante pruebas) los riesgos necesitarían tener un caso de prueba aprobado correspondiente. Para poder evaluar el riesgo residual, se necesita disponibilidad de trazabilidad entre todos los riesgos y los resultados de las pruebas, de modo que los riesgos que no tienen una prueba aprobada correspondiente puedan identificarse como los riesgos residuales.",
                "Es correcto. La trazabilidad entre los requisitos del usuario y los resultados de la ejecución de pruebas proporciona una indicación de qué requisitos del usuario han sido probados y, por lo tanto, proporciona un medio para medir el progreso del proyecto (en el contexto de las pruebas) frente a los objetivos de negocio.",
                "No es correcto. No está claro que los casos de prueba fallidos proporcionen una indicación de las habilidades del tester más que los casos de prueba aprobados. Dependería en parte del objetivo de la prueba (p. ej., generar confianza o causar fallos). Además, dicha medición de los testers basada en casos de prueba aprobados y fallidos puede ser contraproducente, ya que podría hacer que los testers optimicen sus pruebas en función de esa métrica en lugar del objetivo de la prueba.",
                "No es correcto. La trazabilidad entre los riesgos identificados y las condiciones de prueba escritas proporciona un medio para determinar qué condiciones de prueba adicionales deben escribirse. Determinar qué riesgos vale la pena probar es parte de la gestión de riesgos y, en particular, de la mitigación de riesgos."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes es MÁS probable que sea un ejemplo de un tester usando una habilidad genérica al probar?",
            "options": [
                "El profundo conocimiento del tester sobre una variedad de juegos de computadora significaba que se llevaba bien con uno de los desarrolladores que también era aficionado a los juegos.",
                "El tester era un ex piloto y pudo comprender mejor los criterios de aceptación para el sistema de control del helicóptero.",
                "El tester trabajó anteriormente como programador y usó sus habilidades en esta área para comunicarse mejor con los analistas de negocio.",
                "El tester tuvo mucho cuidado de no cometer errores cuando generó metódicamente casos de prueba antes de comenzar su sesión de pruebas exploratorias."
            ],
            "correctAnswerIndex": 1,
            "chapter": "1. Fundamentos de las Pruebas",
            "rationales": [
                "No es correcto. Las habilidades de comunicación sólidas, la escucha activa y las habilidades de trabajo en equipo permiten a un tester interactuar eficazmente con todas las partes interesadas; sin embargo, un conocimiento profundo de una variedad de juegos de computadora que les permitió llevarse bien con un desarrollador no es un ejemplo de una habilidad genérica útil para los testers.",
                "Es correcto. El conocimiento del dominio que se puede usar para comprender y comunicarse con los usuarios finales y los representantes de negocio es una de las habilidades genéricas requeridas por los testers. Un tester con experiencia como piloto estaría en mejores condiciones para apreciar los criterios de aceptación del sistema de control del helicóptero.",
                "No es correcto. Aunque las habilidades de programación podrían considerarse como conocimiento técnico que puede aumentar la eficiencia al utilizar algunas herramientas de prueba, es poco probable que estas habilidades mejoren su comunicación con los analistas de negocio.",
                "No es correcto. Aunque la minuciosidad, la atención al detalle, la curiosidad y un enfoque metódico para identificar defectos difíciles de encontrar son todas habilidades genéricas útiles para los testers, es dudoso que estuvieran generando casos de prueba antes de comenzar las pruebas exploratorias. Esto se debe a que uno de los principios fundamentales de las pruebas exploratorias es que los casos de prueba se generan durante la prueba, no se escriben de antemano."
            ]
        },
        {
            "questionText": "¿Cuál de las siguientes es una ventaja del enfoque de 'todo el equipo' (whole-team approach)?",
            "options": [
                "Permite a los miembros del equipo asumir cualquier rol en cualquier momento.",
                "Solo necesita un único equipo para soportar el proyecto de desarrollo completo.",
                "Integra a representantes de negocio junto a los desarrolladores en el mismo equipo.",
                "Genera una sinergia de equipo que beneficia a todo el proyecto."
            ],
            "correctAnswerIndex": 3,
            "chapter": "1. Fundamentos de las Pruebas",
            "rationales": [
                "No es correcto. El enfoque de todo el equipo permite que cualquier miembro del equipo con las habilidades y conocimientos necesarios realice cualquier tarea; sin embargo, eso no significa que los miembros del equipo puedan asumir cualquier rol en cualquier momento. Típicamente, solo asumen roles en los que son competentes, y no hay ninguna sugerencia de que cada miembro del equipo pueda hacer cada rol.",
                "No es correcto. El enfoque de todo el equipo se aplica a cómo funciona un solo equipo (típicamente en el desarrollo de software ágil); no cubre cómo se supone que múltiples equipos trabajen en proyectos más grandes, y no sugiere que solo se necesite un 'equipo completo' para un proyecto completo.",
                "No es correcto. El enfoque de todo el equipo no espera que cada miembro del equipo participe en cada decisión importante. Por ejemplo, no hay necesidad de que el representante de negocio (es decir, el Product Owner) participe en cada decisión técnica que no afecte el resultado del negocio, e implementar tal enfoque ralentiría innecesariamente el progreso del equipo.",
                "Es correcto. Al aprovechar los diversos conjuntos de habilidades de cada miembro del equipo de la manera más efectiva, el enfoque de todo el equipo fomenta una dinámica de equipo superior, promueve una comunicación y colaboración robustas, y genera una sinergia de equipo que beneficia a todo el proyecto."
            ]
        },
        {
            "questionText": "¿Cuál de las siguientes afirmaciones sobre el ciclo de vida de desarrollo de software elegido es CORRECTA?",
            "options": [
                "Si se utiliza el desarrollo de software ágil, la automatización de las pruebas del sistema reemplaza la necesidad de pruebas de regresión.",
                "Si se utiliza un modelo de desarrollo secuencial, las pruebas dinámicas suelen restringirse a fases posteriores del ciclo de vida.",
                "Si se utiliza un modelo de desarrollo iterativo, las pruebas de componentes suelen ser realizadas manualmente por los desarrolladores.",
                "Si se utiliza un modelo de desarrollo incremental, las pruebas estáticas se realizan en los primeros incrementos y las pruebas dinámicas en los incrementos posteriores."
            ],
            "correctAnswerIndex": 1,
            "chapter": "2. Pruebas a lo largo del ciclo de vida",
            "rationales": [
                "No es correcto. En el desarrollo de software ágil, los entregables se producen en cada iteración, y la entrega frecuente de incrementos necesita pruebas de regresión extensas. Aunque parte (o la totalidad) de estas pruebas de regresión puede ser automatizada, las pruebas de regresión (automatizadas o no) no pueden ser reemplazadas por la automatización de las pruebas del sistema.",
                "Es correcto. Si se utiliza un modelo de desarrollo secuencial, al principio del ciclo de vida no hay código disponible para su ejecución, por lo que durante este tiempo se realizan pruebas estáticas (p. ej., revisiones). Más adelante en el ciclo de vida, cuando el código está disponible para su ejecución, las pruebas dinámicas son posibles. Sin embargo, nótese que la preparación para las pruebas dinámicas a menudo ocurrirá temprano en cualquier ciclo de vida de desarrollo de software.",
                "No es correcto. Si se utiliza un modelo de desarrollo iterativo, como el desarrollo de software ágil, las pruebas de componentes bien pueden usarse para pruebas de regresión en cada iteración. En cuyo caso, hay un fuerte argumento para automatizar estas pruebas de componentes, que deberán ejecutarse con frecuencia, y es poco probable que haya un argumento fuerte para que los desarrolladores realicen estas pruebas de componentes manualmente.",
                "No es correcto. En la mayoría de los modelos de desarrollo incremental, los entregables se producen en cada incremento, lo que requiere pruebas tanto estáticas como dinámicas en todos los niveles de prueba para cada incremento entregado."
            ]
        },
        {
            "questionText": "¿Cuál de las siguientes es una buena práctica de prueba que se aplica a todos los ciclos de vida de desarrollo de software?",
            "options": [
                "Los testers deben revisar los productos de trabajo como parte de la siguiente fase de desarrollo.",
                "Los testers deben revisar los productos de trabajo tan pronto como estén disponibles los borradores.",
                "Los testers deben revisar los productos de trabajo antes de que comience el análisis y diseño de pruebas.",
                "Los testers deben revisar los productos de trabajo inmediatamente después de que se publiquen."
            ],
            "correctAnswerIndex": 1,
            "chapter": "2. Pruebas a lo largo del ciclo de vida",
            "rationales": [
                "No es correcto. Los testers deben revisar los productos de trabajo tan pronto como estén disponibles los borradores para permitir pruebas tempranas como parte de un enfoque de 'shift-left'. Si esperaran hasta la siguiente fase de desarrollo, se podría comenzar un trabajo de desarrollo (y prueba) innecesario sobre productos de trabajo no revisados y defectuosos.",
                "Es correcto. Los testers deben revisar los productos de trabajo tan pronto como estén disponibles los borradores para permitir pruebas tempranas como parte de un enfoque de 'shift-left'.",
                "No es correcto. Los testers típicamente revisan los productos de trabajo que forman la base de pruebas como parte del análisis de pruebas, no antes del análisis y diseño de pruebas.",
                "No es correcto. Los testers deben revisar los productos de trabajo tan pronto como estén disponibles los borradores para permitir pruebas tempranas como parte de un enfoque de 'shift-left'. Esperar hasta que se publiquen significa que cualquier defecto que pudiera encontrarse mediante la revisión del tester estará en el documento publicado."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes es un ejemplo de un enfoque de 'primero la prueba' (test-first) para el desarrollo?",
            "options": [
                "Desarrollo Guiado por Pruebas (Test-Driven Development)",
                "Desarrollo Guiado por Cobertura (Coverage-Driven Development)",
                "Desarrollo Guiado por Calidad (Quality-Driven Development)",
                "Desarrollo Guiado por Características (Feature-Driven Development)"
            ],
            "correctAnswerIndex": 0,
            "chapter": "2. Pruebas a lo largo del ciclo de vida",
            "rationales": [
                "Es correcto. El Desarrollo Guiado por Pruebas (TDD) es un ejemplo bien conocido de un enfoque de 'primero la prueba' para el desarrollo.",
                "No es correcto. El Desarrollo Guiado por Cobertura no es un ejemplo correcto de un enfoque de 'primero la prueba' para el desarrollo.",
                "No es correcto. El Desarrollo Guiado por Calidad no es un ejemplo correcto de un enfoque de 'primero la prueba' para el desarrollo.",
                "No es correcto. El Desarrollo Guiado por Características no es un ejemplo de un enfoque de 'primero la prueba' para el desarrollo, sino que es una metodología de desarrollo de software ágil basada en la entrega de características (en contraposición a las historias de usuario en Scrum)."
            ]
        },
        {
            "questionText": "¿Cuál de las siguientes afirmaciones sobre DevOps es CORRECTA?",
            "options": [
                "Para acelerar los lanzamientos, la integración continua se utiliza para alentar a los desarrolladores a enviar código rápidamente sin necesidad de completar las pruebas de componentes.",
                "Para poder actualizar y lanzar sistemas con mayor frecuencia, se requieren muchas pruebas de regresión automatizadas para reducir el peligro de la regresión.",
                "Para tratar a los desarrolladores y a las operaciones por igual, los testers asignarán más esfuerzo a las pruebas de lanzamiento por parte de las operaciones utilizando un enfoque de 'shift-right'.",
                "Para crear una mayor sinergia entre testers, desarrolladores y operaciones, las pruebas deben volverse completamente automatizadas sin pruebas manuales."
            ],
            "correctAnswerIndex": 1,
            "chapter": "2. Pruebas a lo largo del ciclo de vida",
            "rationales": [
                "No es correcto. DevOps mejora las pruebas de varias maneras, como proporcionando retroalimentación rápida sobre la calidad del código, pruebas de regresión automatizadas que minimizan el riesgo de regresión y promoviendo un enfoque de 'shift-left' con envíos de código de alta calidad y pruebas de componentes. Esto se proporciona en gran medida a través de la integración continua, donde los desarrolladores envían pruebas de componentes (unitarias) con su nuevo código, que deben pasar para que el código sea admitido en la compilación. Por lo tanto, los desarrolladores sí necesitan completar las pruebas de componentes.",
                "Es correcto. DevOps mejora las pruebas de varias maneras, como proporcionando retroalimentación rápida sobre la calidad del código, pruebas de regresión automatizadas que minimizan el riesgo de regresión y promoviendo un enfoque de 'shift-left' con envíos de código de alta calidad y pruebas de componentes.",
                "No es correcto. DevOps mejora las pruebas de varias maneras, como proporcionando retroalimentación rápida sobre la calidad del código, pruebas de regresión automatizadas que minimizan el riesgo de regresión y promoviendo un enfoque de 'shift-left' con envíos de código de alta calidad y pruebas de componentes. Los testers no intentan tratar a los desarrolladores y a las operaciones por igual dedicando más tiempo a las pruebas de lanzamiento, aunque bien se puede utilizar un enfoque de 'shift-right' para las pruebas (pruebas en producción).",
                "No es correcto. Los procesos automatizados como la integración/entrega continua (CI/CD) en DevOps facilitan entornos de prueba estables y reducen la necesidad de pruebas manuales; sin embargo, existe el riesgo de pasar por alto la importancia de las pruebas manuales, especialmente desde la perspectiva del usuario."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes es MÁS probable que se realice como parte de las pruebas de sistema?",
            "options": [
                "Pruebas de seguridad de un sistema de gestión de crédito por un equipo de pruebas independiente.",
                "Probar la interfaz de un sistema de cambio de divisas con un sistema bancario externo.",
                "Pruebas beta de un sistema de aprendizaje a distancia por parte de desarrolladores de material didáctico.",
                "Probar las interacciones entre la interfaz de usuario y la base de datos de un sistema de recursos humanos."
            ],
            "correctAnswerIndex": 0,
            "chapter": "2. Pruebas a lo largo del ciclo de vida",
            "rationales": [
                "Es correcto. Las pruebas de sistema examinan el comportamiento y las capacidades del sistema completo y cubren pruebas no funcionales de características de calidad, lo que incluye las pruebas de seguridad. Este tipo de pruebas a menudo es realizado por un equipo de pruebas independiente basado en las especificaciones del sistema.",
                "No es correcto. Las pruebas de integración de sistemas examinan las interfaces con otros sistemas y servicios externos.",
                "No es correcto. Las pruebas beta son un tipo de prueba de aceptación realizadas en un sitio externo por roles fuera de la organización de desarrollo.",
                "No es correcto. Las pruebas de integración de componentes implican probar las (interfaces e) interacciones entre componentes de un sistema, como la interfaz de usuario y la base de datos."
            ]
        },
        {
            "questionText": "¿Cuál de las siguientes afirmaciones es CORRECTA?",
            "options": [
                "Las pruebas de regresión aumentan en número a medida que avanza el proyecto, mientras que el número de pruebas de confirmación disminuye a medida que avanza el proyecto.",
                "Las pruebas de regresión se crean y ejecutan cuando se corrige el objeto de prueba, mientras que las pruebas de confirmación se ejecutan cada vez que se mejora el objeto de prueba.",
                "Las pruebas de regresión se preocupan de verificar que el entorno operativo no ha cambiado, mientras que las pruebas de confirmación se preocupan de probar los cambios en el objeto de prueba.",
                "Las pruebas de regresión se preocupan por los efectos adversos en el código no modificado, mientras que las pruebas de confirmación se preocupan por probar el código modificado."
            ],
            "correctAnswerIndex": 3,
            "chapter": "2. Pruebas a lo largo del ciclo de vida",
            "rationales": [
                "No es correcto. Las pruebas de regresión aumentan en número a medida que avanza el proyecto, ya que generalmente se requieren nuevas pruebas de regresión a medida que se realizan cambios en el sistema. Del mismo modo, el número de pruebas de confirmación también suele aumentar a medida que avanza el proyecto, ya que se necesitan nuevas pruebas de confirmación para cada corrección realizada en un sistema.",
                "No es correcto. Es al revés. Las pruebas de confirmación se crean y ejecutan cuando se corrige el objeto de prueba, y las pruebas de regresión se ejecutan (idealmente) cada vez que se mejora (cambia) el objeto de prueba.",
                "No es correcto. Las pruebas de confirmación verifican que un defecto se ha corregido correctamente y, por lo tanto, se preocupan de probar los cambios en el objeto de prueba. Sin embargo, las pruebas de regresión aseguran que los cambios (incluidos los cambios en el entorno operativo) no tengan efectos negativos en el software no modificado y, por lo tanto, no verifican que el entorno operativo no haya cambiado.",
                "Es correcto. Las pruebas de regresión aseguran que los cambios no tengan efectos negativos en el software no modificado. Las pruebas de confirmación verifican que un defecto se ha corregido y, por lo tanto, se preocupan por el código modificado."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes es un ejemplo de un defecto que puede ser encontrado por pruebas estáticas pero NO por pruebas dinámicas?",
            "options": [
                "Falta de usabilidad proporcionada a través de la interfaz de usuario.",
                "Código sin una ruta que lo alcance.",
                "Tiempos de respuesta deficientes para la mayoría de los usuarios esperados.",
                "Características requeridas que no están implementadas en el código."
            ],
            "correctAnswerIndex": 1,
            "chapter": "3. Pruebas Estáticas",
            "rationales": [
                "No es correcto. La falta de usabilidad proporcionada a través de la interfaz de usuario se puede detectar mediante una revisión utilizando una lista de verificación adecuada, pero la falta de usabilidad también se puede identificar haciendo que varios usuarios típicos prueben dinámicamente la interfaz de usuario y proporcionen comentarios sobre su usabilidad.",
                "Es correcto. Una revisión del código puede detectar código que no puede ser alcanzado por ninguna ruta; sin embargo, las pruebas dinámicas solo pueden ejercer código alcanzable y no pueden determinar que el código no puede ser alcanzado sin ejecutar cada posible combinación de entradas y estados de entrada, lo cual es impracticable para el código real.",
                "No es correcto. Los tiempos de respuesta deficientes para la mayoría de los usuarios esperados son difíciles de determinar sin ejecutar el código (es decir, mediante pruebas estáticas), por lo que en esta situación las pruebas dinámicas podrían encontrar un defecto, pero es poco probable que las pruebas estáticas lo encuentren.",
                "No es correcto. Una revisión del código por alguien que conoce las características requeridas podría detectar que las características requeridas no se habían implementado en el código, y también se podrían usar pruebas dinámicas para determinar que estas características requeridas no se habían implementado."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes es un beneficio del feedback temprano y frecuente de las partes interesadas?",
            "options": [
                "Los gerentes son conscientes de qué desarrolladores son menos productivos.",
                "Permite a los gerentes de proyecto priorizar sus interacciones con las partes interesadas.",
                "Facilita la comunicación temprana de posibles problemas de calidad.",
                "Los usuarios finales entienden mejor por qué se retrasa la entrega del producto de trabajo."
            ],
            "correctAnswerIndex": 2,
            "chapter": "3. Pruebas Estáticas",
            "rationales": [
                "No es correcto. El feedback es de las partes interesadas (p. ej., representante de negocio, usuario final), no de los desarrolladores, por lo que es poco probable que este feedback informe a los gerentes sobre qué desarrolladores son más o menos productivos.",
                "No es correcto. El feedback temprano y frecuente de las partes interesadas no es utilizado por los gerentes de proyecto para priorizar cómo interactúan con las diferentes partes interesadas.",
                "Es correcto. Obtener feedback de las partes interesadas temprano y con frecuencia en el proceso de desarrollo de software puede ser muy beneficioso, ya que facilita la comunicación temprana de posibles problemas de calidad, puede prevenir malentendidos sobre los requisitos y asegura que cualquier cambio en los requisitos de las partes interesadas se entienda e implemente antes.",
                "No es correcto. El feedback temprano y frecuente puede prevenir el desarrollo de un producto que no satisface las necesidades de las partes interesadas, y resulta en costosos retrabajos y plazos incumplidos, por lo que, idealmente, no debería haber retrasos. Además, el feedback es de las partes interesadas (no para ellas), lo que incluye a los usuarios finales, por lo que los usuarios finales que proporcionan feedback no ayudarán a la comprensión de los usuarios finales."
            ]
        },
        {
            "questionText": "Dadas las siguientes descripciones de tareas y actividades de revisión: 1. Se seleccionan las características de calidad a evaluar y los criterios de salida. 2. Todos tienen acceso al producto de trabajo. 3. Se identifican anomalías en el producto de trabajo. 4. Se discuten las anomalías. A. Revisión individual, B. Iniciación de la revisión, C. Planificación, D. Comunicación y análisis. ¿Cuál de las siguientes OPCIONES MEJOR coincide con las descripciones de tareas y las actividades?",
            "options": [
                "1B, 2C, 3D, 4A",
                "1B, 2D, 3C, 4A",
                "1C, 2A, 3B, 4D",
                "1C, 2B, 3A, 4D"
            ],
            "correctAnswerIndex": 3,
            "chapter": "3. Pruebas Estáticas",
            "rationales": [
                "No es correcto. La coincidencia correcta es: 1C, 2B, 3A, 4D.",
                "No es correcto. La coincidencia correcta es: 1C, 2B, 3A, 4D.",
                "No es correcto. La coincidencia correcta es: 1C, 2B, 3A, 4D.",
                "Es correcto. Planificación (C): Definir el alcance, propósito, producto a revisar, características de calidad a evaluar, criterios de salida, etc. (1). Iniciación (B): Asegurar que todos los participantes tengan acceso al producto y los recursos necesarios (2). Revisión Individual (A): Evaluar la calidad del producto, identificar y registrar anomalías (3). Comunicación y Análisis (D): Analizar y discutir cada anomalía, determinar su estado y acciones requeridas (4)."
            ]
        },
        {
            "questionText": "Dados los siguientes roles y responsabilidades en las revisiones: Roles: 1. Escriba (Scribe), 2. Líder de revisión, 3. Facilitador, 4. Gerente. Responsabilidades: A. Asegura el funcionamiento efectivo de las reuniones de revisión y establece un entorno seguro. B. Registra la información de la revisión, como decisiones y nuevas anomalías. C. Decide qué se va a revisar y proporciona recursos como personal y tiempo. D. Asume la responsabilidad general de la revisión, como organizar cuándo y dónde tendrá lugar. ¿Cuál de las siguientes OPCIONES MEJOR coincide con los roles y responsabilidades?",
            "options": [
                "1A, 2B, 3D, 4C",
                "1A, 2C, 3B, 4D",
                "1B, 2D, 3A, 4C",
                "1B, 2D, 3C, 4A"
            ],
            "correctAnswerIndex": 2,
            "chapter": "3. Pruebas Estáticas",
            "rationales": [
                "No es correcto. La coincidencia correcta es: 1B, 2D, 3A, 4C.",
                "No es correcto. La coincidencia correcta es: 1B, 2D, 3A, 4C.",
                "Es correcto. Escriba (B): Registra la información de la revisión. Líder de revisión (D): Asume la responsabilidad general de la revisión. Facilitador (A): Asegura el funcionamiento efectivo de las reuniones. Gerente (C): Decide qué revisar y proporciona recursos.",
                "No es correcto. La coincidencia correcta es: 1B, 2D, 3A, 4C."
            ]
        },
        {
            "questionText": "¿Cuál de las siguientes afirmaciones describe MEJOR la diferencia entre las pruebas de tabla de decisión y las pruebas de rama?",
            "options": [
                "En las pruebas de tabla de decisión, los casos de prueba se derivan de las sentencias de decisión en el código. En las pruebas de rama, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba.",
                "En las pruebas de tabla de decisión, los casos de prueba se derivan de la especificación que describe la lógica de negocio. En las pruebas de rama, los casos de prueba se basan en la anticipación de posibles defectos en el código fuente.",
                "En las pruebas de tabla de decisión, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba. En las pruebas de rama, los casos de prueba se derivan de la especificación que describe la lógica de negocio.",
                "En las pruebas de tabla de decisión, los casos de prueba son independientes de cómo se implementa el software. En las pruebas de rama, los casos de prueba solo se pueden crear después del diseño o la implementación del código."
            ],
            "correctAnswerIndex": 3,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. Las pruebas de tabla de decisión son una técnica de prueba de caja negra, por lo que se basan en la especificación, no en la estructura; los casos de prueba no se basan en las decisiones en el código fuente. En las pruebas de rama, los casos de prueba se derivan del conocimiento del flujo de control del objeto de prueba.",
                "No es correcto. La anticipación de posibles defectos se utiliza en la adivinación de errores (una técnica de prueba basada en la experiencia), no en las pruebas de rama (una técnica basada en la estructura). En las pruebas de tabla de decisión, los casos de prueba se derivan de la especificación que describe la lógica de negocio.",
                "No es correcto. Si un caso de prueba se basa en el conocimiento del flujo de control del objeto de prueba, es una técnica de prueba de caja blanca. Las pruebas de tabla de decisión se basan típicamente en un análisis de la lógica de negocio, por lo que es una técnica de prueba de caja negra. En las pruebas de rama, los casos de prueba no se derivan de la especificación; esto la convertiría en una técnica de prueba de caja negra. Las pruebas de rama son una técnica de prueba de caja blanca, donde los casos de prueba se derivan en función de la estructura del código fuente.",
                "Es correcto. Las pruebas de tabla de decisión son una técnica de prueba de caja negra, por lo que se basan en un análisis del comportamiento especificado del objeto de prueba sin referencia a su estructura interna. Por lo tanto, los casos de prueba son independientes de cómo se implementa el software. Las pruebas de rama son una técnica de prueba de caja blanca, por lo que los casos de prueba se basan en un análisis de la estructura interna y el procesamiento del objeto de prueba. Como los casos de prueba dependen de cómo se diseña y codifica el software, solo pueden crearse después del diseño o la implementación del objeto de prueba."
            ]
        },
        {
            "questionText": "Los clientes de la cadena de lavado de autos TestWash tienen tarjetas con un registro del número de lavados que han comprado hasta ahora. El valor inicial es 0. Después de entrar en el lavado de autos, el sistema aumenta el número en la tarjeta en uno. Este valor representa el número del lavado actual. Basado en este número, el sistema decide a qué descuento tiene derecho el cliente. Por cada décimo lavado, el sistema ofrece un 10% de descuento, y por cada vigésimo lavado, el sistema ofrece un 40% de descuento adicional (es decir, un 50% de descuento en total). ¿Cuál de los siguientes conjuntos de datos de entrada (entendidos como los números del lavado actual) logra la mayor cobertura de partición de equivalencia?",
            "options": [
                "19, 20, 30",
                "11, 12, 20",
                "1, 10, 50",
                "10, 29, 30, 31"
            ],
            "correctAnswerIndex": 0,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "Es correcto. 19 cubre la partición 'sin descuento', 20 cubre la partición '50% de descuento' y 30 cubre la partición '10% de descuento'. Estos tres valores cubren las tres particiones de equivalencia válidas.",
                "No es correcto. 11 y 12 cubren la partición 'sin descuento', mientras que 20 cubre la partición '50% de descuento', cubriendo así dos de las tres particiones de equivalencia válidas.",
                "No es correcto. 1 cubre la partición 'sin descuento', mientras que 10 y 50 cubren la partición '10% de descuento'. La partición '50% de descuento' no está cubierta, por lo que en total se cubren dos de las tres particiones de equivalencia válidas.",
                "No es correcto. 29 y 31 cubren la partición 'sin descuento', mientras que 10 y 30 cubren la partición '10% de descuento'. La partición '50% de descuento' no está cubierta, por lo que en total se cubren dos de las tres particiones de equivalencia válidas."
            ]
        },
        {
            "questionText": "Está probando un formulario que verifica la corrección de la longitud de la contraseña proporcionada como entrada. El formulario acepta una contraseña con la longitud correcta y rechaza una contraseña que es demasiado corta o demasiado larga. La longitud de la contraseña es correcta si tiene entre 6 y 12 caracteres inclusive. De lo contrario, se considera incorrecta. Al principio, el formulario está vacío (longitud de contraseña = 0). Aplica el análisis de valores límite a la variable 'longitud de contraseña'. Su conjunto de casos de prueba logra una cobertura de valores límite de 2 puntos del 100%. El equipo decidió que, debido al alto riesgo de este componente, se deben agregar casos de prueba para garantizar una cobertura de valores límite de 3 puntos del 100%. ¿Qué longitudes de contraseña adicionales deberían probarse para lograr esto?",
            "options": [
                "4, 5, 13, 14",
                "7, 11",
                "1, 5, 13",
                "1, 4, 7, 11, 14"
            ],
            "correctAnswerIndex": 3,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. Los valores adicionales necesarios son 1, 4, 7, 11 y 14.",
                "No es correcto. Estos valores ya deberían estar cubiertos por las pruebas de valores dentro de la partición válida. No son los valores adicionales necesarios para pasar de una cobertura de 2 puntos a una de 3 puntos.",
                "No es correcto. Los valores adicionales necesarios son 1, 4, 7, 11 y 14.",
                "Es correcto. El dominio tiene tres particiones: {0, 1, ..., 5} (demasiado corta), {6, 7, ..., 12} (OK), y {13, 14, ...} (demasiado larga). Para una BVA de 3 puntos, necesitamos probar: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. La BVA de 2 puntos ya cubre los valores en los límites: 0, 5, 6, 12, 13. Para pasar a una BVA de 3 puntos, necesitamos agregar los valores adyacentes a los límites que no han sido cubiertos: 1, 4, 7, 11, 14."
            ]
        },
        {
            "questionText": "La siguiente tabla de decisión contiene las reglas para determinar el riesgo de aterosclerosis. Colesterol (mg/dl), Presión arterial (mm Hg). Se diseñaron los casos de prueba con los siguientes datos de entrada: TC1: Col=125, PA=141. TC2: Col=200, PA=201. TC3: Col=124, PA=201. TC4: Col=109, PA=200. TC5: Col=201, PA=140. ¿Cuál es la cobertura de la tabla de decisión lograda por estos casos de prueba?",
            "options": [
                "40%",
                "60%",
                "80%",
                "100%"
            ],
            "correctAnswerIndex": 1,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. La cobertura es del 60%.",
                "Es correcto. Hay cinco columnas en la tabla de decisión. Cada caso de prueba cubre una de ellas. TC1 y TC2 cubren la Regla 4. TC3 y TC4 cubren la Regla 2. TC5 cubre la Regla 5. Por lo tanto, estos cinco casos de prueba cubren tres de las cinco columnas, logrando una cobertura de (3/5)*100% = 60%.",
                "No es correcto. La cobertura es del 60%.",
                "No es correcto. La cobertura es del 60%."
            ]
        },
        {
            "questionText": "Un sistema de almacenamiento puede guardar hasta tres elementos y se modela mediante el siguiente diagrama de transición de estados. La variable N representa el número de elementos almacenados actualmente. ¿Cuál de los siguientes casos de prueba, representados como secuencias de eventos, logra el mayor nivel de cobertura de transiciones válidas?",
            "options": [
                "Añadir, Eliminar, Añadir, Añadir, Añadir",
                "Añadir, Añadir, Añadir, Añadir, Eliminar, Eliminar",
                "Añadir, Añadir, Añadir, Eliminar, Eliminar",
                "Añadir, Añadir, Añadir, Eliminar, Añadir"
            ],
            "correctAnswerIndex": 2,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. Esta secuencia cubre 4 de 5 transiciones válidas (80%).",
                "No es correcto. Esta secuencia no es factible. Después de los primeros tres 'Añadir', el sistema está en el estado LLENO. Desde LLENO, no hay una transición válida para 'Añadir'.",
                "Es correcto. La secuencia de eventos 'Añadir, Añadir, Añadir, Eliminar, Eliminar' sigue las transiciones: START -> NOT FULL (N=1), NOT FULL -> NOT FULL (N=2), NOT FULL -> FULL (N=3), FULL -> NOT FULL (N=2), NOT FULL -> NOT FULL (N=1). Esta secuencia cubre 5 de 5 transiciones válidas, logrando una cobertura del 100%.",
                "No es correcto. Esta secuencia cubre 4 de 5 transiciones válidas (80%)."
            ]
        },
        {
            "questionText": "Ejecuta dos casos de prueba, T1 y T2, en el mismo código. La prueba T1 logró una cobertura de sentencias del 40% y la prueba T2 logró una cobertura de sentencias del 65%. ¿Cuál de las siguientes frases debe ser necesariamente cierta?",
            "options": [
                "La suite de pruebas compuesta por las pruebas T1 y T2 logra una cobertura de sentencias del 105%.",
                "Existe al menos una sentencia que debe haber sido ejecutada tanto por T1 como por T2.",
                "Al menos el 5% de las sentencias en el código bajo prueba no son ejecutables.",
                "La suite de pruebas compuesta por las pruebas T1 y T2 logra una cobertura de rama completa."
            ],
            "correctAnswerIndex": 1,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. La cobertura siempre se define como el porcentaje de los elementos cubiertos. Por lo tanto, no puede exceder el 100%.",
                "Es correcto. Si las sentencias ejecutadas por T1 y T2 fueran disjuntas, la cobertura de la suite de pruebas {T1, T2} sería del 105%, lo cual es imposible (ver respuesta a). Por lo tanto, al menos el 5% de las sentencias ejecutables deben haber sido ejecutadas tanto por T1 como por T2.",
                "No es correcto. La cobertura de sentencias no nos dice nada sobre el número de sentencias no ejecutables en el código.",
                "No es correcto. Incluso si una suite de pruebas logra una cobertura de sentencias completa, esto no implica que logre una cobertura de rama completa."
            ]
        },
        {
            "questionText": "Sea la métrica de cobertura de rama definida como BCov = (X / Y) * 100%. ¿Qué representan X e Y en esta fórmula?",
            "options": [
                "X = número de resultados de decisión ejercidos por los casos de prueba, Y = número total de resultados de decisión en el código.",
                "X = número de ramas condicionales ejercidas por los casos de prueba, Y = número total de ramas en el código.",
                "X = número de ramas ejercidas por los casos de prueba, Y = número total de ramas en el código.",
                "X = número de ramas condicionales ejercidas por los casos de prueba, Y = número total de resultados de decisión en el código."
            ],
            "correctAnswerIndex": 2,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. Un resultado de decisión es una rama condicional. Para las pruebas de rama, X cuenta no solo las ramas condicionales, sino también las incondicionales.",
                "No es correcto. La cobertura de rama cuenta no solo las ramas condicionales, sino también las incondicionales.",
                "Es correcto. Las pruebas de rama son una técnica de prueba de caja blanca en la que los elementos de cobertura son las ramas. Una rama es una transferencia de control entre dos nodos en el grafo de flujo de control. Cada transferencia de control puede ser incondicional o condicional. La cobertura se mide como el número de ramas ejercidas por los casos de prueba dividido por el número total de ramas, y se expresa como un porcentaje.",
                "No es correcto. Tanto X como Y cuentan solo las ramas condicionales y no tienen en cuenta las ramas incondicionales."
            ]
        },
        {
            "questionText": "¿Cuáles DOS de las siguientes afirmaciones proporcionan la MEJOR justificación para usar pruebas exploratorias?",
            "options": [
                "A los testers no se les ha asignado suficiente tiempo para el diseño y la ejecución de pruebas.",
                "La estrategia de prueba existente requiere que los testers usen técnicas formales de prueba de caja negra.",
                "La especificación está escrita en un lenguaje formal que puede ser procesado por una herramienta.",
                "Los testers son miembros de un equipo ágil y tienen buenas habilidades de programación.",
                "Los testers tienen experiencia en el dominio del negocio y tienen buenas habilidades analíticas."
            ],
            "correctAnswerIndex": 4,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "Es correcto. Las pruebas exploratorias son útiles cuando hay pocas o inadecuadas especificaciones o cuando hay una presión de tiempo significativa en las pruebas.",
                "No es correcto. Las pruebas exploratorias no son una técnica de prueba de caja negra.",
                "No es correcto. Las pruebas exploratorias son útiles cuando las especificaciones están mal escritas.",
                "No es correcto. Las habilidades de programación no tienen nada que ver con las pruebas exploratorias en principio.",
                "Es correcto. Las pruebas exploratorias serán más efectivas si el tester tiene experiencia, tiene conocimiento del dominio y un alto grado de habilidades esenciales, como habilidades analíticas, curiosidad y creatividad."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes se ajusta MEJOR como un elemento de la lista de verificación utilizada en las pruebas basadas en listas de verificación?",
            "options": [
                "\"El desarrollador cometió un error al implementar el código\"",
                "\"La cobertura de sentencias alcanzada supera el 85%\"",
                "\"El programa funciona correctamente en cuanto a los requisitos funcionales y no funcionales\"",
                "\"Los mensajes de error están escritos en un lenguaje que el usuario puede entender\""
            ],
            "correctAnswerIndex": 3,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. Las listas de verificación deben contener condiciones de prueba a verificar. Esto es un ejemplo de un error, no una condición de prueba; incluso si el tester pudiera deducir algunas condiciones de prueba potenciales a partir de los ejemplos de errores, esta descripción de error es demasiado general.",
                "No es correcto. Las listas de verificación no deben contener elementos que sean más adecuados como criterios de salida. Este es un ejemplo de un criterio de salida.",
                "No es correcto. Las listas de verificación no deben contener elementos que sean demasiado generales. Este es un elemento muy general, que prácticamente describe el objetivo de las pruebas.",
                "Es correcto. Este es un ejemplo de una condición de prueba que puede ser verificada por un humano."
            ]
        },
        {
            "questionText": "Considere los siguientes criterios de aceptación para una historia de usuario escrita desde la perspectiva del propietario de una tienda en línea: Dado que el usuario ha iniciado sesión y está en la página de inicio, Cuando el usuario hace clic en el botón 'Añadir Artículo', Entonces debería aparecer el formulario 'Crear Artículo', Y el usuario debería poder introducir un nombre y un precio para el nuevo artículo. ¿En qué formato están escritos estos criterios de aceptación?",
            "options": [
                "Orientado a reglas",
                "Orientado a escenarios",
                "Orientado a producto",
                "Orientado a proceso"
            ],
            "correctAnswerIndex": 1,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. El formato orientado a reglas incluye formatos como listas de verificación de viñetas o formas tabuladas de mapeos de entrada-salida, mostrando explícitamente las reglas a seguir. Dado/Cuando/Entonces es un formato orientado a escenarios porque describe un escenario a verificar.",
                "Es correcto. Este es un formato Dado/Cuando/Entonces (Given/When/Then), que es orientado a escenarios.",
                "No es correcto. No existe un formato 'orientado a producto' de criterios de aceptación.",
                "No es correcto. No existe un formato 'orientado a proceso' de criterios de aceptación."
            ]
        },
        {
            "questionText": "Su equipo analiza la siguiente historia de usuario para definir los criterios de aceptación: 'Como cliente registrado, quiero poder ver mis pedidos anteriores en el sitio web de la empresa, para poder hacer un seguimiento de mis compras'. ¿Cuál de los siguientes casos de prueba NO será relevante para esta historia de usuario?",
            "options": [
                "Entrada: el cliente inicia sesión en su cuenta en el sitio web y hace clic en el botón 'ver historial de pedidos'. Salida esperada: el sistema muestra una lista de todos los pedidos anteriores del cliente, incluyendo la fecha, el número de pedido y el costo total.",
                "Entrada: el cliente hace clic en un pedido de la lista de pedidos. Salida esperada: el sistema muestra los artículos individuales comprados, junto con sus precios y cantidades.",
                "Entrada: el cliente hace clic en el botón 'Ordenar ascendente' en la pantalla de historial de pedidos. Salida esperada: el sistema muestra el historial de pedidos ordenado por número de pedido en orden ascendente.",
                "Entrada: un cliente no registrado se registra como nuevo cliente con una dirección de correo electrónico válida que no existe ya en la base de datos de clientes. Salida esperada: el sistema acepta el registro y crea la cuenta."
            ],
            "correctAnswerIndex": 3,
            "chapter": "4. Técnicas de diseño de pruebas",
            "rationales": [
                "No es correcto. El caso de prueba está relacionado con la visualización de pedidos anteriores en el historial de pedidos.",
                "No es correcto. El caso de prueba está relacionado con la visualización de pedidos anteriores.",
                "No es correcto. El caso de prueba está relacionado con la visualización de pedidos anteriores en el historial de pedidos.",
                "Es correcto. El caso de prueba está relacionado con el proceso de registro, que no se discute en la historia de usuario. La historia de usuario trata sobre la visualización de pedidos anteriores."
            ]
        },
        {
            "questionText": "Su equipo sigue el proceso que utiliza el pipeline de entrega de DevOps. Los primeros tres pasos de este proceso son: (1) Desarrollo de código (2) Enviar código a un sistema de control de versiones y fusionarlo en la rama 'test' (3) Realizar pruebas de componentes para el código enviado. ¿Cuál de los siguientes es el MEJOR criterio de entrada para el paso (2) de este pipeline?",
            "options": [
                "El análisis estático no devuelve advertencias de alta severidad para el código enviado.",
                "El sistema de control de versiones no informa conflictos al fusionar el código en la rama 'test'.",
                "Las pruebas de componentes están compiladas y listas para ser ejecutadas.",
                "La cobertura de sentencias es de al menos el 80%."
            ],
            "correctAnswerIndex": 0,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "Es correcto. Esto es algo que puede (y debe) ser verificado antes de que el código sea enviado al control de versiones.",
                "No es correcto. Esto es algo que se puede verificar después de que se realiza el paso (2), porque el informe de conflictos de fusión se puede hacer después de que el código se envía y se fusiona.",
                "No es correcto. Esto se ajusta mejor como criterio de entrada para el paso (3).",
                "No es correcto. Esto se ajusta mejor como criterio de salida para el paso (3)."
            ]
        },
        {
            "questionText": "Desea estimar el esfuerzo de prueba para el nuevo proyecto utilizando una estimación basada en ratios. Calcula el ratio de esfuerzo de prueba a desarrollo utilizando datos promediados tanto para el esfuerzo de desarrollo como para el esfuerzo de prueba de cuatro proyectos históricos similares al nuevo. La tabla muestra estos datos históricos. El esfuerzo de desarrollo estimado para el nuevo proyecto es de $800,000. ¿Cuál es su estimación del esfuerzo de prueba en este proyecto?",
            "options": [
                "$40,000",
                "$80,000",
                "$81,250",
                "$82,500"
            ],
            "correctAnswerIndex": 1,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "No es correcto. $40,000 es el esfuerzo de prueba del proyecto P1.",
                "Es correcto. El esfuerzo de desarrollo promedio es de $900,000 y el esfuerzo de prueba promedio es de $90,000 (calculado a partir de los cuatro proyectos). El ratio promedio de esfuerzo de prueba a desarrollo es de 1:10 ($90,000 : $900,000), lo que significa que históricamente, en promedio, el esfuerzo de prueba es el 10% del esfuerzo de desarrollo. Por lo tanto, si el esfuerzo de desarrollo se estima en $800,000, el esfuerzo de prueba estimado se estima como: 10% * $800,000 = 0.1 * $800,000 = $80,000.",
                "No es correcto. $81,250 se calcula promediando los ratios individuales.",
                "No es correcto. No hay una justificación clara para este cálculo."
            ]
        },
        {
            "questionText": "Está probando una aplicación web que permite a los usuarios BUSCAR productos, VER detalles del producto, AÑADIR productos a un carrito de compras y realizar un PEDIDO. Ha preparado los siete casos de prueba siguientes, todos los cuales desea ejecutar. Las pruebas deben ejecutarse en el mejor orden, según la prioridad de la prueba. También ha identificado las siguientes dependencias lógicas entre los casos de prueba: La funcionalidad de BÚSQUEDA debe probarse antes de que se pueda probar la funcionalidad de VISTA. La funcionalidad de VISTA debe probarse antes que la de AÑADIR. La funcionalidad de AÑADIR debe probarse antes que la de PEDIDO. ¿Qué caso de prueba debería ejecutarse en cuarto lugar?",
            "options": [
                "TC3",
                "TC1",
                "TC7",
                "TC2"
            ],
            "correctAnswerIndex": 1,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "No es correcto. TC1 debe ejecutarse antes que TC3.",
                "Es correcto. Las dependencias lógicas significan que para cada producto debe ejecutar BUSCAR -> VER -> AÑADIR antes de ejecutar PEDIDO. Puede añadir más productos (usando el mismo flujo), antes de ejecutar PEDIDO. Basado en esto, TC1 o TC2 deben ejecutarse primero, de lo contrario no se puede progresar. La primera prioridad debe darse a VER y AÑADIR el producto B, ya que sus casos de prueba (TC6, TC4) tienen mayor prioridad. Por lo tanto, las primeras 3 pruebas a ejecutar son TC2 -> TC4 -> TC6. Ahora debemos considerar si ejecutar TC7 y luego todo el flujo para el producto A o ejecutar primero los TC para el producto A. Como TC7 tiene una prioridad más baja que las otras pruebas, deberían probarse primero. Por lo tanto, el flujo completo debería ser: TC2 -> TC4 -> TC6 -> TC1 -> TC3 -> TC5 -> TC7. El cuarto es TC1.",
                "No es correcto. Como se muestra arriba, TC7 es el último en ser ejecutado.",
                "No es correcto. El producto B debe ser ejecutado antes que el producto A."
            ]
        },
        {
            "questionText": "Según el modelo de cuadrantes de prueba, ¿cuál de los siguientes cae en el cuadrante Q1 ('orientado a la tecnología' y 'apoya al equipo')?",
            "options": [
                "Pruebas de usabilidad",
                "Pruebas funcionales",
                "Pruebas de aceptación del usuario",
                "Pruebas de integración de componentes"
            ],
            "correctAnswerIndex": 3,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "No es correcto. Las pruebas de usabilidad son pruebas orientadas al negocio que critican el producto (Q3).",
                "No es correcto. Las pruebas funcionales son pruebas orientadas al negocio (Q2).",
                "No es correcto. Las pruebas de aceptación del usuario son pruebas orientadas al negocio que critican el producto (Q3).",
                "Es correcto. Las pruebas de integración de componentes son pruebas orientadas a la tecnología que apoyan al equipo (guían el desarrollo) (Q1)."
            ]
        },
        {
            "questionText": "Dados los siguientes riesgos y actividades de mitigación: Riesgos: 1. La implementación ineficaz de un bucle causa respuestas largas del sistema. 2. Los consumidores cambian sus preferencias. 3. Inundación de la sala de servidores. 4. Pacientes por encima de cierta edad reciben informes inexactos. Mitigaciones: A. Aceptación del riesgo, B. Pruebas de rendimiento, C. Uso del análisis de valores límite como técnica de prueba, D. Transferencia del riesgo. ¿Cuál de las siguientes OPCIONES MEJOR coincide con los riesgos y las actividades de mitigación?",
            "options": [
                "1C, 2D, 3A, 4B",
                "1B, 2D, 3A, 4C",
                "1B, 2A, 3D, 4C",
                "1C, 2A, 3D, 4B"
            ],
            "correctAnswerIndex": 2,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "No es correcto. Las combinaciones correctas son: 1B, 2A, 3D y 4C.",
                "No es correcto. Las combinaciones correctas son: 1B, 2A, 3D y 4C.",
                "Es correcto. Las respuestas largas del sistema (1) pueden probarse en pruebas de rendimiento (B). Los cambios en las preferencias de los consumidores (2) suelen estar fuera de nuestro control, por lo que generalmente aceptamos este riesgo (A). La inundación de la sala de servidores (3) puede causar una pérdida significativa, por lo que deberíamos transferir el riesgo, p. ej., comprando una póliza de seguro (D). Que los pacientes por encima de cierta edad reciban informes inexactos (4) sugiere un problema de límite potencial, que puede detectarse eficazmente con técnicas como BVA (C).",
                "No es correcto. Las combinaciones correctas son: 1B, 2A, 3D y 4C."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes es una métrica de calidad del producto?",
            "options": [
                "Tiempo medio hasta el fallo (Mean time to failure)",
                "Número de defectos encontrados",
                "Cobertura de requisitos",
                "Porcentaje de detección de defectos"
            ],
            "correctAnswerIndex": 0,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "Es correcto. Las métricas de calidad del producto miden las características de calidad. El tiempo medio hasta el fallo mide la madurez, por lo que es una métrica de calidad del producto.",
                "No es correcto. Este es un ejemplo de una métrica de defectos, no una métrica de calidad del producto.",
                "No es correcto. Este es un ejemplo de una métrica de cobertura, not una métrica de calidad del producto.",
                "No es correcto. Este es un ejemplo de una métrica de defectos, no una métrica de calidad del producto."
            ]
        },
        {
            "questionText": "Usted es miembro de un equipo de pruebas ubicado en América del Norte, que desarrolla un producto para un cliente ubicado en Europa. El equipo es ágil y sigue el enfoque DevOps y utiliza un pipeline de integración/entrega continua. ¿Cuál de las siguientes es la forma MENOS efectiva de comunicar el progreso de las pruebas al cliente?",
            "options": [
                "Cara a cara",
                "Paneles de control (Dashboards)",
                "Correo electrónico",
                "Videoconferencia"
            ],
            "correctAnswerIndex": 0,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "Es correcto. El cliente se encuentra en una ubicación y zona horaria diferente, por lo que puede ser difícil comunicarse cara a cara.",
                "No es correcto. Los paneles de control suelen estar disponibles para cualquier usuario en cualquier momento, por lo que la diferencia de zonas horarias no será un obstáculo tan grande para la comunicación como la comunicación verbal, cara a cara.",
                "No es correcto. Aunque la diferencia horaria entre Europa y América es de varias horas, y esto puede causar algunos inconvenientes, ciertamente no es tan grande como con la comunicación cara a cara.",
                "No es correcto. Las herramientas de videoconferencia son un medio conveniente de comunicación. Aunque la comunicación entre Europa y América durante las horas de trabajo generalmente requiere que una de las partes se conecte muy temprano o muy tarde, esto no es un inconveniente tan grande como la comunicación verbal, cara a cara."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes describe MEJOR un ejemplo de cómo la gestión de la configuración (CM) apoya a las pruebas?",
            "options": [
                "Teniendo el número de versión del entorno, la herramienta de CM puede recuperar los números de versión de las bibliotecas, stubs y drivers utilizados en ese entorno.",
                "Teniendo un registro de los valores de las entradas de prueba, la herramienta de CM puede ejecutar los casos de prueba para estas configuraciones y calcular la cobertura de prueba.",
                "Teniendo datos sobre la fecha de compra de una licencia de software, la herramienta de CM genera automáticamente información sobre el hecho de que la licencia del producto está a punto de expirar.",
                "Teniendo el número de versión del caso de prueba, la herramienta de CM puede generar automáticamente datos de prueba para este caso de prueba."
            ],
            "correctAnswerIndex": 0,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "Es correcto. Para un elemento de configuración complejo (p. ej., un entorno de prueba), la CM registra los elementos que lo componen, sus relaciones y versiones.",
                "No es correcto. Las herramientas de CM no ejecutan casos de prueba y no calculan la cobertura.",
                "No es correcto. Una herramienta de CM no es una herramienta de gestión de licencias.",
                "No es correcto. Las herramientas de CM no generan datos de prueba."
            ]
        },
        {
            "questionText": "Está probando una función de ordenación que recibe un conjunto de números como entrada y devuelve el mismo conjunto de números ordenados en orden ascendente. El registro de la ejecución de la prueba tiene el siguiente aspecto (ver log en el PDF). ¿Cuál de las siguientes proporciona la MEJOR descripción del fallo que se puede utilizar en un informe de defectos?",
            "options": [
                "El sistema no logra ordenar varios conjuntos de números. Referencia: TC3, TC4, TC5.",
                "El sistema parece ignorar los duplicados al ordenar. Referencia: TC3, TC4, TC5.",
                "El sistema no logra ordenar números negativos. Referencia: TC4, TC5.",
                "TC3, TC4 y TC5 tienen defectos (datos de entrada duplicados) y deben corregirse."
            ],
            "correctAnswerIndex": 1,
            "chapter": "5. Gestión de Pruebas",
            "rationales": [
                "No es correcto. Si bien la frase es cierta, no proporciona mucho valor para el desarrollador.",
                "Es correcto. De los resultados de la prueba parece que el sistema ignora los duplicados y ordena la lista sin tener en cuenta las repeticiones. Esta es probablemente la causa de los fallos en TC3, TC4, TC5. Dicha información puede ayudar al desarrollador a encontrar el defecto y corregirlo más eficientemente.",
                "No es correcto. El sistema no falla al ordenar números negativos. El problema radica más bien en ignorar los duplicados.",
                "No es correcto. Los casos de prueba TC3, TC4 y TC5 fallan, pero no somos conscientes de que los casos de prueba tengan ningún defecto."
            ]
        },
        {
            "questionText": "Dadas las siguientes descripciones y categorías de herramientas de prueba: Descripciones: 1. Soporte para el seguimiento del flujo de trabajo, 2. Facilitar la comunicación, 3. Máquinas virtuales, 4. Soporte para revisiones. Categorías: A. Herramientas de pruebas estáticas, B. Herramientas de soporte para la escalabilidad y estandarización del despliegue, C. Herramientas de DevOps, D. Herramientas de colaboración. ¿Cuál de las siguientes OPCIONES MEJOR coincide con las descripciones y categorías?",
            "options": [
                "1A, 2B, 3C, 4D",
                "1B, 2D, 3C, 4A",
                "1C, 2D, 3B, 4A",
                "1D, 2C, 3A, 4B"
            ],
            "correctAnswerIndex": 2,
            "chapter": "6. Herramientas de Soporte para Pruebas",
            "rationales": [
                "No es correcto. La coincidencia correcta es: 1C, 2D, 3B, 4A.",
                "No es correcto. La coincidencia correcta es: 1C, 2D, 3B, 4A.",
                "Es correcto. Herramientas DevOps (C) soportan el pipeline de entrega DevOps, seguimiento del flujo de trabajo, procesos de construcción automatizados (1). Herramientas de colaboración (D) facilitan la comunicación (2). Herramientas para escalabilidad (B) incluyen máquinas virtuales, herramientas de contenerización (3). Herramientas de pruebas estáticas (A) apoyan al tester en la realización de revisiones y análisis estático (4).",
                "No es correcto. La coincidencia correcta es: 1C, 2D, 3B, 4A."
            ]
        },
        {
            "questionText": "¿Cuál de los siguientes es MÁS probablemente un beneficio de la automatización de pruebas?",
            "options": [
                "Proporciona medidas de cobertura que son demasiado complicadas para que los humanos las deriven.",
                "Comparte la responsabilidad de las pruebas con el proveedor de la herramienta.",
                "Elimina la necesidad de pensamiento crítico al analizar los resultados de las pruebas.",
                "Genera casos de prueba a partir de un análisis del código del programa."
            ],
            "correctAnswerIndex": 0,
            "chapter": "6. Herramientas de Soporte para Pruebas",
            "rationales": [
                "Es correcto. La automatización de pruebas puede proporcionar medidas que son demasiado complicadas para que los humanos las deriven, como las medidas de cobertura de pruebas de caja blanca para todo excepto el código más trivial.",
                "No es correcto. Al usar herramientas de prueba, la responsabilidad de las pruebas NO se comparte con el proveedor de la herramienta, ya que el proveedor no está involucrado en las pruebas, y es responsabilidad del tester. La única responsabilidad posible que podría asignarse al proveedor de la herramienta es si la herramienta no funciona como se esperaba y proporciona resultados de prueba incorrectos.",
                "No es correcto. Los testers aún necesitan realizar un pensamiento crítico al analizar las anomalías en los resultados de las pruebas para determinar su causa probable.",
                "No es correcto. Ni los testers ni las herramientas pueden generar casos de prueba simplemente a partir de un análisis del código del programa, ya que el código es la implementación y no proporciona información sobre los resultados esperados, que deberán provenir de otra parte de la base de pruebas, como la especificación de diseño."
            ]
        }
    ]
    },
    {
        id: "istqb_exam_c",
        title: "Examen de Práctica C (Oficial)",
        questions: [
          {
            questionText: "¿Cuál de las siguientes opciones es un objetivo de prueba típico?",
            options: [
              "Validar que se cumplen los requisitos documentados.",
              "Causar fallos e identificar defectos.",
              "Iniciar errores e identificar las causas raíz.",
              "Verificar que el objeto de prueba cumple con las expectativas del usuario."
            ],
            correctAnswerIndex: 1,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto. Validar que se cumplen los requisitos documentados es incorrecto, ya que la validación se ocupa de cumplir los requisitos y expectativas del usuario, mientras que la verificación se ocupa de cumplir los requisitos especificados. Esto sería correcto si reemplazáramos 'validar' por 'verificar'.",
                "Es correcto. Causar fallos e identificar defectos es probablemente el objetivo más común de las pruebas dinámicas.",
                "No es correcto. Iniciar errores e identificar las causas raíz es incorrecto porque los testers no inician errores, intentan causar fallos. Los errores suelen ser cometidos por los desarrolladores (y realmente no se pueden iniciar) y resultan en defectos, que los testers intentan identificar ya sea directamente a través de pruebas estáticas o indirectamente a través de fallos con pruebas dinámicas. Identificar las causas raíz es útil pero es parte de la depuración, que es una actividad separada de las pruebas.",
                "No es correcto. Verificar que el objeto de prueba cumple con las expectativas del usuario es incorrecto, ya que la verificación se ocupa de comprobar que se cumplen los requisitos especificados (documentados), mientras que la validación se ocupa de cumplir los requisitos y expectativas del usuario. Esto sería correcto si reemplazáramos 'verificar' por 'validar'."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes afirmaciones describe MEJOR la diferencia entre pruebas y depuración?",
            options: [
              "Las pruebas causan fallos mientras que la depuración corrige fallos.",
              "Las pruebas son una actividad negativa mientras que la depuración es una actividad positiva.",
              "Las pruebas determinan que existen defectos mientras que la depuración elimina los defectos.",
              "Las pruebas encuentran la causa de los defectos mientras que la depuración corrige la causa de los defectos."
            ],
            correctAnswerIndex: 2,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto. Las pruebas dinámicas causan fallos (a partir de los cuales se pueden localizar y corregir defectos). Sin embargo, la depuración se ocupa de localizar y corregir estos defectos. Por lo tanto, la depuración no corrige fallos.",
                "No es correcto. Tanto las pruebas como la depuración contribuyen a mejorar la calidad del objeto de prueba, por lo que ambas deberían considerarse positivamente. La depuración generalmente se considera una actividad positiva ya que está arreglando algo. Las pruebas dinámicas implican causar intencionalmente que el objeto de prueba falle, por lo que algunas personas lo consideran una actividad negativa, pero esa es una visión muy limitada (y no una que suelen tener los testers). Son posibles tanto los casos de prueba positivos como los negativos. Los casos de prueba positivos verifican que el objeto de prueba realiza correctamente lo que se supone que debe hacer, mientras que las pruebas negativas verifican que el objeto de prueba no hace lo que no se supone que debe hacer.",
                "Es correcto. Las pruebas determinan que existen defectos ya sea directamente a través de la observación del defecto en revisiones (o por una herramienta en análisis estático), o indirectamente al causar un fallo en las pruebas dinámicas. La depuración es una actividad separada de las pruebas (normalmente realizada por desarrolladores) y se ocupa de localizar defectos (solo para pruebas dinámicas) y corregirlos.",
                "No es correcto. Las causas de los defectos suelen ser errores humanos. Las pruebas encuentran defectos ya sea directamente a través de pruebas estáticas, o indirectamente al causar fallos en las pruebas dinámicas, y la depuración corrige los defectos. Por lo tanto, las pruebas no encuentran la causa de los defectos y la depuración no corrige las causas de los defectos."
            ]
        },
        {
            questionText: "La 'falacia de la ausencia de defectos' es uno de los principios de las pruebas. ¿Cuál de los siguientes es un ejemplo de abordar este principio en la práctica?",
            options: [
                "Explicar que no es posible que las pruebas demuestren la ausencia de defectos.",
                "Apoyar a los usuarios finales para que realicen pruebas de aceptación.",
                "Asegurar que no queden defectos de implementación en el sistema entregado.",
                "Modificar las pruebas que no causan fallos para asegurar que queden pocos defectos."
            ],
            correctAnswerIndex: 1,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto. El principio de 'las pruebas demuestran la presencia, no la ausencia de defectos' explica que, si bien las pruebas pueden detectar la existencia de defectos en el objeto de prueba, no es posible demostrar que no hay defectos y, por lo tanto, garantizar su corrección. Por lo tanto, explicar que no es posible que las pruebas demuestren la ausencia de defectos abordaría parcialmente este principio, no la 'falacia de la ausencia de defectos'.",
                "Es correcto. Al apoyar al usuario final para que realice pruebas de aceptación, debería ser posible validar que el sistema satisface las necesidades y expectativas de los usuarios.",
                "No es correcto. No es posible asegurar que no queden defectos de implementación en el sistema entregado, ya que el principio de 'las pruebas demuestran la presencia, no la ausencia de defectos' explica que, si bien las pruebas pueden detectar la existencia de defectos en el objeto de prueba, no es posible demostrar que no hay defectos y, por lo tanto, garantizar su corrección.",
                "No es correcto. Modificar las pruebas que no causan fallos para asegurar que queden pocos defectos es una forma de abordar el principio de 'las pruebas se desgastan'. Este principio se refiere a la idea de que repetir pruebas idénticas en un código inalterado es poco probable que descubra nuevos defectos y, por lo tanto, modificar las pruebas puede ser esencial. Esto no validará que el sistema satisface las necesidades y expectativas de los usuarios."
            ]
        },
        {
            questionText: "¿Cuáles de las siguientes actividades de prueba son MÁS propensas a implicar la aplicación del análisis de valores límite y particionamiento de equivalencia?",
            options: [
                "Implementación de pruebas y monitorización de pruebas.",
                "Diseño de pruebas y análisis de pruebas.",
                "Ejecución de pruebas y monitorización de pruebas.",
                "Implementación de pruebas y ejecución de pruebas."
            ],
            correctAnswerIndex: 1,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto. La implementación de pruebas se centra en agrupar casos de prueba en procedimientos, y la monitorización de pruebas se ocupa de seguir el plan. Ninguna de las dos crea casos de prueba utilizando estas técnicas.",
                "Es correcto. Tanto el análisis de pruebas (para identificar condiciones de prueba) como el diseño de pruebas (para crear casos de prueba a partir de esas condiciones) utilizan técnicas de diseño de pruebas como el análisis de valores límite y el particionamiento de equivalencia.",
                "No es correcto. La ejecución de pruebas se ocupa de ejecutar los procedimientos de prueba, y la monitorización de pruebas se ocupa de seguir el plan. Ninguna de las dos utiliza estas técnicas de diseño.",
                "No es correcto. La implementación de pruebas agrupa los casos de prueba y la ejecución de pruebas los corre. El diseño de casos de prueba utilizando estas técnicas ocurre antes de estas actividades."
            ]
        },
        {
            questionText: "Dado el siguiente testware: 1. Elementos de cobertura, 2. Solicitudes de cambio, 3. Cronograma de ejecución de pruebas, 4. Condiciones de prueba priorizadas. Y las siguientes actividades de prueba: A. Análisis de pruebas, B. Diseño de pruebas, C. Implementación de pruebas, D. Finalización de pruebas. ¿Cuál de las siguientes opciones muestra MEJOR el testware producido por las actividades?",
            options: [
              "1B, 2D, 3C, 4A",
              "1B, 2D, 3A, 4C",
              "1D, 2C, 3A, 4B",
              "1D, 2C, 3B, 4A"
            ],
            correctAnswerIndex: 0,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
              "Es correcto. Análisis de pruebas (A) produce condiciones de prueba priorizadas (4). Diseño de pruebas (B) produce elementos de cobertura (1). Implementación de pruebas (C) produce el cronograma de ejecución (3). Finalización de pruebas (D) produce solicitudes de cambio (2).",
              "No es correcto. El cronograma de ejecución no se produce en el análisis (3A) y las condiciones de prueba no se producen en la implementación (4C).",
              "No es correcto. Los elementos de cobertura no se producen en la finalización (1D) y las solicitudes de cambio no se producen en la implementación (2C).",
              "No es correcto. El cronograma de ejecución no se produce en el diseño de pruebas (3B)."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes afirmaciones sobre los diferentes roles de prueba es MÁS probable que sea CORRECTA?",
            options: [
              "En el desarrollo de software ágil, el rol de gestión de pruebas es responsabilidad principal del equipo, mientras que el rol de pruebas es principalmente responsabilidad de un solo individuo de fuera del equipo.",
              "El rol de pruebas es principalmente responsable de la monitorización y el control de las pruebas, mientras que el rol de gestión de pruebas es principalmente responsable de la planificación y finalización de las pruebas.",
              "En el desarrollo de software ágil, las actividades de gestión de pruebas que abarcan múltiples equipos son manejadas por un gerente de pruebas fuera del equipo, mientras que algunas tareas de gestión de pruebas son manejadas por el propio equipo.",
              "El rol de gestión de pruebas es principalmente responsable del análisis y diseño de pruebas, mientras que el rol de pruebas es principalmente responsable de la implementación y ejecución de pruebas."
            ],
            correctAnswerIndex: 2,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
              "No es correcto. Aunque es correcto decir que en el desarrollo de software ágil, algunas de las tareas de gestión de pruebas pueden ser manejadas por el propio equipo ágil, el rol de pruebas no es principalmente responsabilidad de un solo individuo de fuera del equipo. En cambio, es más probable que las pruebas las realicen varios miembros del equipo siguiendo el enfoque de equipo completo.",
              "No es correcto. El rol de gestión de pruebas implica principalmente actividades relacionadas con la planificación, monitorización y control de pruebas, y finalización de pruebas. Por lo tanto, aunque esta afirmación es parcialmente correcta, es incorrecto decir que el rol de pruebas es principalmente responsable de la monitorización y el control de las pruebas.",
              "Es correcto. En el desarrollo de software ágil, algunas de las tareas de gestión de pruebas pueden ser manejadas por el propio equipo ágil. Sin embargo, para las actividades de prueba que abarcan múltiples equipos dentro de una organización, los gerentes de pruebas fuera del equipo de desarrollo pueden realizar estas tareas.",
              "No es correcto. El rol de gestión de pruebas implica principalmente actividades relacionadas con la planificación, monitorización y control de pruebas, y finalización de pruebas, mientras que el rol de pruebas es principalmente responsable de los aspectos técnicos y de ingeniería de las pruebas, como el análisis, diseño, implementación y ejecución de pruebas. Por lo tanto, el rol de gestión de pruebas no es normalmente responsable del análisis y diseño de pruebas, aunque es correcto decir que el rol de pruebas es principalmente responsable de la implementación y ejecución de pruebas."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes es una ventaja del enfoque de 'equipo completo' (whole-team approach)?",
            options: [
              "Equipos sin testers.",
              "Mejora de la dinámica del equipo.",
              "Miembros del equipo especialistas.",
              "Tamaños de equipo más grandes."
            ],
            correctAnswerIndex: 1,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
              "No es correcto. En el enfoque de equipo completo, los testers juegan un papel vital al compartir su experiencia en pruebas con el equipo y guiar el desarrollo del producto. Colaboran con otros miembros del equipo para alcanzar los niveles de calidad deseados y trabajan con representantes de negocio para crear pruebas de aceptación. Los testers también se asocian con los desarrolladores para determinar la estrategia de prueba y los enfoques de automatización óptimos.",
              "Es correcto. Al aprovechar los diversos conjuntos de habilidades de cada miembro del equipo de la manera más efectiva, el enfoque de equipo completo fomenta una dinámica de equipo superior, promueve una comunicación y colaboración robustas, y genera un efecto sinérgico que beneficia a todo el proyecto.",
              "No es correcto. El enfoque de equipo completo permite que cualquier miembro del equipo con las habilidades y conocimientos necesarios realice cualquier tarea, por lo que los miembros del equipo especialistas no son una ventaja de este enfoque.",
              "No es correcto. No hay una guía específica sobre el tamaño óptimo de los equipos que utilizan el enfoque de equipo completo, y no hay ninguna sugerencia de que los equipos más grandes sean mejores."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes afirmaciones sobre la independencia de las pruebas es CORRECTA?",
            options: [
              "Los testers independientes encontrarán defectos debido a su diferente perspectiva técnica con respecto a los desarrolladores, pero su independencia puede llevar a una relación conflictiva con los desarrolladores.",
              "La familiaridad de los desarrolladores con su propio código significa que solo encuentran unos pocos defectos en él; sin embargo, su experiencia en software compartida con los testers significa que estos defectos también serían encontrados por los testers.",
              "Las pruebas independientes requieren testers que estén fuera del equipo del desarrollador e idealmente de fuera de la organización; sin embargo, a estos testers les resulta difícil entender el dominio de la aplicación.",
              "Los testers de fuera del equipo del desarrollador son más independientes que los testers de dentro del equipo, pero los testers de dentro del equipo tienen más probabilidades de ser culpados por los retrasos en el lanzamiento del producto."
            ],
            correctAnswerIndex: 0,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
              "Es correcto. El principal beneficio de la independencia en las pruebas es que los testers son más propensos a identificar diferentes tipos de fallos y defectos en comparación con los desarrolladores, debido a sus variados antecedentes, puntos de vista técnicos y posibles sesgos, incluido el sesgo cognitivo. Sin embargo, la principal desventaja de la independencia en las pruebas es que los testers pueden aislarse del equipo de desarrollo, lo que lleva a problemas de comunicación, falta de colaboración y, potencialmente, una relación conflictiva, con los testers siendo culpados por retrasos y cuellos de botella en el proceso de lanzamiento.",
              "No es correcto. La familiaridad de un desarrollador con el código no significa que rara vez encuentren defectos en él, sino que esta familiaridad significa que pueden encontrar eficientemente muchos defectos en su propio código. Y, en lugar de que los desarrolladores y testers tengan una formación compartida, el hecho de que los desarrolladores tengan una formación diferente a la de los testers se cita normalmente como la razón por la que testers y desarrolladores encuentran diferentes tipos de defectos.",
              "No es correcto. Las pruebas se pueden realizar en diferentes niveles de independencia, desde ninguna independencia para el autor hasta una independencia muy alta para los testers de fuera de la organización. En la mayoría de los proyectos, se utilizan múltiples niveles de independencia, con los desarrolladores realizando pruebas de componentes e integración de componentes, el equipo de pruebas realizando pruebas de sistema e integración de sistemas, y los representantes de negocio realizando pruebas de aceptación. Por lo tanto, los testers pueden estar en el equipo del desarrollador y no necesitan venir de fuera de la organización. El conocimiento del dominio de la aplicación cambiará de un caso a otro y no depende del nivel de independencia.",
              "No es correcto. Las pruebas se pueden realizar en diferentes niveles de independencia, desde ninguna independencia para el autor hasta una independencia muy alta para los testers de fuera de la organización, siendo los testers de fuera del equipo del desarrollador generalmente más independientes que los testers de dentro del equipo. Sin embargo, hay más razones para creer que los testers de fuera del equipo tienen más probabilidades de estar aislados de los desarrolladores y, por lo tanto, tienen más probabilidades de ser culpados por los retrasos en el lanzamiento del producto."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes es una buena práctica de prueba que se aplica a todos los ciclos de vida de desarrollo de software?",
            options: [
              "Por cada nivel de prueba, hay un nivel de desarrollo correspondiente.",
              "Por cada objetivo de prueba, hay un objetivo de desarrollo correspondiente.",
              "Por cada actividad de prueba de software, hay una actividad de usuario correspondiente.",
              "Por cada actividad de desarrollo de software, hay una actividad de prueba correspondiente."
            ],
            correctAnswerIndex: 3,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
              "No es correcto. El control de calidad se aplica a todas las actividades de desarrollo, lo que significa que cada actividad de desarrollo de software tiene una actividad de prueba correspondiente. Sin embargo, aquí estamos intentando equiparar los niveles de prueba con los niveles de desarrollo y, aunque sabemos lo que se entiende por 'niveles de prueba', no hay un entendimiento común del término 'nivel de desarrollo'.",
              "No es correcto. Cada actividad de desarrollo de software tiene una actividad de prueba correspondiente; sin embargo, los objetivos de prueba son bastante diferentes. Por ejemplo, podría haber un objetivo de prueba de asegurar que un objeto de prueba se adhiere a un requisito contractual de que se debe realizar un cierto tipo de prueba antes de la entrega. En este caso, no hay razón para que haya un objetivo de desarrollo correspondiente.",
              "No es correcto. El control de calidad se aplica a todas las actividades de desarrollo, lo que significa que cada actividad de desarrollo de software tiene una actividad de prueba correspondiente. Sin embargo, la misma simetría no se aplica a las pruebas y las actividades del usuario. Por ejemplo, para algunos sistemas es difícil incluso identificar a los usuarios finales. Además, algunas actividades de prueba se centran en los desarrolladores (p. ej., pruebas de facilidad de mantenimiento), lo que no tiene ningún aspecto de usuario.",
              "Es correcto. El control de calidad se aplica a todas las actividades de desarrollo, lo que significa que cada actividad de desarrollo de software tiene una actividad de prueba correspondiente."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes es un ejemplo de un enfoque de 'primero la prueba' (test-first) para el desarrollo?",
            options: [
              "Desarrollo Guiado por Pruebas de Componentes",
              "Desarrollo Guiado por Pruebas de Integración",
              "Desarrollo Guiado por Pruebas de Sistema",
              "Desarrollo Guiado por Pruebas de Aceptación"
            ],
            correctAnswerIndex: 3,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
              "No es correcto. El Desarrollo Guiado por Pruebas de Componentes no es un ejemplo correcto de un enfoque de desarrollo 'primero la prueba'.",
              "No es correcto. El Desarrollo Guiado por Pruebas de Integración no es un ejemplo correcto de un enfoque de desarrollo 'primero la prueba'.",
              "No es correcto. El Desarrollo Guiado por Pruebas de Sistema no es un ejemplo correcto de un enfoque de desarrollo 'primero la prueba'.",
              "Es correcto. El Desarrollo Guiado por Pruebas de Aceptación (ATDD) es un ejemplo bien conocido de un enfoque de desarrollo 'primero la prueba'."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones proporciona la MEJOR descripción del enfoque de 'desplazamiento a la izquierda' (shift-left)?",
            options: [
              "Cuando lo acuerdan los desarrolladores, las actividades manuales en el lado izquierdo del proceso de prueba se automatizan para apoyar el principio de que 'las pruebas tempranas ahorran tiempo y dinero'.",
              "Donde sea rentable, las actividades de prueba se mueven para realizarse antes en el ciclo de vida del desarrollo de software (SDLC) para reducir el costo total de la calidad al reducir el número de defectos encontrados más tarde en el SDLC.",
              "Cuando tienen tiempo libre disponible, los testers deben automatizar las pruebas de regresión, comenzando con las pruebas de componentes e integración de componentes.",
              "Cuando están disponibles, los testers son capacitados para realizar tareas temprano en el SDLC para permitir que más actividades de prueba se automaticen más tarde en el SDLC."
            ],
            correctAnswerIndex: 1,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
              "No es correcto. Las prácticas involucradas en las pruebas de 'desplazamiento a la izquierda' tienen como objetivo implementar más actividades de prueba en las fases tempranas del ciclo de vida de desarrollo, representando el SDLC como si se moviera de izquierda a derecha. No existe tal cosa como el 'lado izquierdo del proceso de prueba'.",
              "Es correcto. El 'desplazamiento a la izquierda' enfatiza la importancia de comenzar las pruebas antes en el ciclo de vida del desarrollo de software (SDLC). Implementar pruebas de 'desplazamiento a la izquierda' requiere capacitación adicional y un mayor esfuerzo y costos durante las primeras etapas del SDLC; sin embargo, los ahorros generales deberían ser mayores.",
              "No es correcto. Aunque las pruebas de componentes automatizadas y las pruebas de integración de componentes para las pruebas de regresión son generalmente valiosas, la creación de estas pruebas es normalmente responsabilidad de los desarrolladores, y si se sigue un enfoque de integración/entrega continua (CI/CD), entonces estas pruebas se habrán enviado con el código. En algunas situaciones, el tester puede automatizar las pruebas de regresión, e incluso a veces las pruebas de componentes y de integración de componentes; sin embargo, esto no es parte de un enfoque de 'desplazamiento a la izquierda' que mueve las pruebas a una fase anterior del SDLC.",
              "No es correcto. Capacitar a los testers para realizar tareas temprano en el SDLC apoyaría un enfoque de 'desplazamiento a la izquierda' al enfatizar la importancia de comenzar las pruebas antes en el SDLC. Sin embargo, automatizar más actividades de prueba para que se realicen más tarde en el SDLC no es parte de un enfoque de 'desplazamiento a la izquierda'."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones es MENOS probable que ocurra como resultado de una retrospectiva?",
            options: [
              "La calidad de los futuros objetos de prueba mejora al identificar mejoras en las prácticas de desarrollo.",
              "La eficiencia de las pruebas mejora al acelerar la configuración de los entornos de prueba a través de la automatización.",
              "La comprensión de los usuarios finales sobre los procesos de desarrollo y prueba mejora.",
              "Los scripts de prueba automatizados se mejoran a través de la retroalimentación de los desarrolladores."
            ],
            correctAnswerIndex: 2,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
              "No es correcto. Uno de los propósitos de las retrospectivas es identificar posibles mejoras en los procesos, que, si se ponen en práctica, deberían dar como resultado una mayor calidad de los futuros productos del proceso de desarrollo (objetos de prueba). Por lo tanto, esto es probable que ocurra como resultado de una retrospectiva.",
              "No es correcto. Un beneficio de las retrospectivas para las pruebas incluye una mayor eficiencia de las pruebas a través de mejoras en los procesos. Por lo tanto, esto es probable que ocurra como resultado de una retrospectiva.",
              "Es correcto. Los participantes en las retrospectivas suelen incluir testers, desarrolladores, arquitectos, propietarios de productos y analistas de negocio, pero los usuarios finales rara vez son invitados o asisten a estas reuniones, y también es poco probable que reciban informes de estas reuniones. Por lo tanto, es muy poco probable que aprendan y entiendan más sobre los procesos de desarrollo y prueba a través de las retrospectivas.",
              "No es correcto. Un beneficio de las retrospectivas para las pruebas incluye una mejor calidad del testware (incluidos los scripts de prueba automatizados) a través de revisiones conjuntas con los desarrolladores. Por lo tanto, esto es probable que ocurra como resultado de una retrospectiva."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes niveles de prueba es MÁS probable que se esté realizando si las pruebas se centran en la validación y no son realizadas por testers?",
            options: [
                "Pruebas de componentes",
                "Pruebas de integración de componentes",
                "Pruebas de integración de sistemas",
                "Pruebas de aceptación"
            ],
            correctAnswerIndex: 3,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
                "No es correcto. Las pruebas de componentes (también llamadas pruebas unitarias) implican probar componentes individuales de forma aislada y son principalmente de verificación contra una especificación, en lugar de validación contra las necesidades del usuario. Sin embargo, estas pruebas no suelen ser realizadas por testers, ya que los desarrolladores suelen realizar estas pruebas en su entorno de desarrollo.",
                "No es correcto. Las pruebas de integración de componentes implican probar las interfaces e interacciones entre componentes y son principalmente de verificación contra una especificación, en lugar de validación contra las necesidades del usuario. Sin embargo, estas pruebas no suelen ser realizadas por testers, ya que los desarrolladores suelen realizar estas pruebas.",
                "No es correcto. Las pruebas de integración de sistemas examinan las interfaces con otros sistemas y servicios externos y son principalmente de verificación contra una especificación, en lugar de validación contra las necesidades del usuario. Este tipo de prueba también es realizado con mayor frecuencia por los testers.",
                "Es correcto. Las pruebas de aceptación se centran en validar que el sistema satisface las necesidades de negocio del usuario y está listo para su despliegue. Idealmente, estas pruebas son realizadas por los usuarios finales."
            ]
        },
        {
            questionText: "El software del sistema de navegación se ha actualizado porque sugería rutas que infringían las leyes de tráfico, como conducir en sentido contrario por calles de un solo sentido. ¿Cuál de las siguientes opciones describe MEJOR las pruebas que se realizarán?",
            options: [
                "Solo pruebas de confirmación.",
                "Pruebas de confirmación y luego pruebas de regresión.",
                "Solo pruebas de regresión.",
                "Pruebas de regresión y luego pruebas de confirmación."
            ],
            correctAnswerIndex: 1,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
                "No es correcto. Es necesario realizar pruebas de confirmación para verificar que las actualizaciones han resultado en una implementación correcta; sin embargo, luego sería sensato realizar pruebas de regresión para asegurar que no se hayan introducido o descubierto defectos en áreas no modificadas del sistema.",
                "Es correcto. Las pruebas de confirmación verificarán que las actualizaciones han resultado en una implementación correcta, y luego se utilizarán las pruebas de regresión para asegurar que no se hayan introducido o descubierto defectos en áreas no modificadas del sistema.",
                "No es correcto. Se deben utilizar pruebas de regresión para asegurar que no se hayan introducido o descubierto defectos en áreas no modificadas del sistema cuando se realizó la actualización; sin embargo, también es necesario realizar pruebas de confirmación para verificar que las actualizaciones han resultado en una implementación correcta.",
                "No es correcto. Las pruebas de confirmación verificarán que las actualizaciones han resultado en una implementación correcta, y se utilizarán las pruebas de regresión para asegurar que no se hayan introducido o descubierto defectos en áreas no modificadas del sistema. Sin embargo, cuando se realizan (es decir, cuando se necesita probar una actualización), las pruebas de confirmación preceden a las pruebas de regresión."
            ]
        },
        {
            questionText: "Dados los siguientes defectos de ejemplo: i. Dos partes diferentes de la especificación de diseño no concuerdan debido a la complejidad del diseño. ii. Un tiempo de respuesta es demasiado largo y hace que los usuarios pierdan la paciencia. iii. No se puede alcanzar una ruta en el código durante la ejecución. iv. Se declara una variable pero nunca se utiliza posteriormente en el programa. v. La cantidad de memoria necesaria para que el programa genere un informe es demasiado alta. ¿Cuál de las siguientes opciones identifica MEJOR los defectos de ejemplo que podrían encontrarse mediante pruebas estáticas (en lugar de pruebas dinámicas)?",
            options: [
                "ii, v",
                "iii, v",
                "i, ii, iv",
                "i, iii, iv"
            ],
            correctAnswerIndex: 3,
            chapter: "3. Pruebas Estáticas",
            rationales: [
                "No es correcto. ii y v son defectos de rendimiento (tiempo de respuesta y memoria) que se encuentran más fácilmente con pruebas dinámicas.",
                "No es correcto. v es un defecto de rendimiento que se encuentra más fácilmente con pruebas dinámicas.",
                "No es correcto. ii es un defecto de rendimiento que se encuentra más fácilmente con pruebas dinámicas.",
                "Es correcto. Los defectos que se encuentran más fácilmente con pruebas estáticas son: i (defecto de especificación), iii (código inalcanzable) y iv (variable no utilizada). Los defectos ii y v son defectos de rendimiento que se encuentran más fácilmente con pruebas dinámicas."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes es un beneficio del feedback temprano y frecuente de las partes interesadas?",
            options: [
                "Los cambios en los requisitos se entienden e implementan antes.",
                "Asegura que las partes interesadas del negocio entiendan los requisitos del usuario.",
                "Permite a los propietarios de productos cambiar sus requisitos tan a menudo como quieran.",
                "A los usuarios finales se les dice qué requisitos no se implementarán antes del lanzamiento."
            ],
            correctAnswerIndex: 0,
            chapter: "3. Pruebas Estáticas",
            rationales: [
                "Es correcto. Obtener feedback de las partes interesadas temprano y con frecuencia en el proceso de desarrollo de software puede ser muy beneficioso. Facilita la comunicación temprana de posibles problemas de calidad, puede prevenir malentendidos sobre los requisitos y asegura que cualquier cambio en los requisitos de las partes interesadas se entienda e implemente antes.",
                "No es correcto. El feedback es de las partes interesadas, y que ellas proporcionen feedback es poco probable que mejore su comprensión de sus propios requisitos de usuario.",
                "No es correcto. Obtener feedback de las partes interesadas temprano y con frecuencia en el proceso de desarrollo de software puede ser muy beneficioso. Facilita la comunicación temprana de posibles problemas de calidad, puede prevenir malentendidos sobre los requisitos y asegura que cualquier cambio en los requisitos de las partes interesadas se entienda e implemente antes. Sin embargo, debido a que los cambios en los requisitos se pueden entender e implementar antes, no significa que se fomenten cambios ilimitados en los requisitos.",
                "No es correcto. El feedback es de las partes interesadas y no cubre la comunicación con ellas. Las comunicaciones a los usuarios finales podrían incluir que se les diga qué requisitos no se implementarán antes del lanzamiento, pero idealmente esto no debería suceder en absoluto."
            ]
        },
        {
            questionText: "Dados los siguientes tipos de revisión: 1. Revisión técnica, 2. Revisión informal, 3. Inspección, 4. Walkthrough. Y las siguientes descripciones: A. Incluye objetivos como obtener consenso, generar nuevas ideas y motivar a los autores a mejorar. B. Incluye objetivos como educar a los revisores, obtener consenso, generar nuevas ideas y detectar posibles defectos. C. El objetivo principal es detectar posibles defectos y requiere la recopilación de métricas para apoyar la mejora del proceso. D. El objetivo principal es detectar posibles defectos y no genera una salida documentada formal. ¿Cuál de las siguientes opciones MEJOR coincide con los tipos de revisión y las descripciones?",
            options: [
                "1A, 2B, 3C, 4D",
                "1A, 2D, 3C, 4B",
                "1B, 2C, 3D, 4A",
                "1C, 2D, 3A, 4B"
            ],
            correctAnswerIndex: 1,
            chapter: "3. Pruebas Estáticas",
            rationales: [
                "No es correcto. La coincidencia correcta es 1A, 2D, 3C, 4B.",
                "Es correcto. Revisión técnica (1) busca consenso y nuevas ideas (A). Revisión informal (2) detecta defectos sin documentación formal (D). Inspección (3) es formal, detecta defectos y recopila métricas (C). Walkthrough (4) educa, busca consenso y detecta defectos (B).",
                "No es correcto. La coincidencia correcta es 1A, 2D, 3C, 4B.",
                "No es correcto. La coincidencia correcta es 1A, 2D, 3C, 4B."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes es un factor que contribuye a una revisión exitosa?",
            options: [
                "Asegurar que la gerencia participe como revisores.",
                "Dividir productos de trabajo grandes en partes más pequeñas.",
                "Establecer la evaluación de los revisores como un objetivo.",
                "Planificar cubrir un documento por revisión."
            ],
            correctAnswerIndex: 1,
            chapter: "3. Pruebas Estáticas",
            rationales: [
                "No es correcto. Para asegurar revisiones exitosas, es importante asegurar el apoyo de la gerencia para el proceso de revisión, sin embargo, eso no significa que deban participar como revisores.",
                "Es correcto. Para asegurar revisiones exitosas, es importante dividir el producto de trabajo en partes que sean lo suficientemente pequeñas para ser revisadas en un plazo razonable para evitar que los revisores pierdan el foco durante la revisión individual o las reuniones de revisión.",
                "No es correcto. Para asegurar revisiones exitosas, es importante definir claramente los objetivos y criterios de salida medibles, sin evaluar a los participantes.",
                "No es correcto. Para asegurar revisiones exitosas, es importante dividir la revisión en partes más pequeñas para evitar que los revisores pierdan el foco durante la revisión individual o las reuniones de revisión. Por lo tanto, no se debe planificar cubrir un documento por revisión."
            ]
        },
        {
            questionText: "¿Cuál es la diferencia PRINCIPAL entre las técnicas de prueba de caja negra y las técnicas de prueba basadas en la experiencia?",
            options: [
                "El objeto de prueba.",
                "El nivel de prueba en el que se utiliza la técnica de prueba.",
                "La base de pruebas.",
                "El ciclo de vida de desarrollo de software (SDLC) en el que se puede utilizar la técnica de prueba."
            ],
            correctAnswerIndex: 2,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. En la mayoría de los casos, tanto las técnicas de prueba de caja negra como las basadas en la experiencia se pueden utilizar para los mismos objetos de prueba.",
                "No es correcto. Tanto las técnicas de prueba de caja negra como las basadas en la experiencia se pueden utilizar en todos los niveles de prueba.",
                "Es correcto. Las técnicas de prueba de caja negra (también conocidas como técnicas basadas en especificaciones) se basan en un análisis del comportamiento especificado del objeto de prueba sin referencia a su estructura interna. Por lo tanto, la base de pruebas suele ser una especificación. Las técnicas de prueba basadas en la experiencia utilizan eficazmente el conocimiento y la experiencia de los testers para el diseño e implementación de casos de prueba. Esto significa que el tester, al diseñar las pruebas, puede no utilizar la especificación en absoluto.",
                "No es correcto. Las técnicas de prueba basadas en la experiencia pueden detectar defectos que pueden pasarse por alto utilizando técnicas de prueba de caja negra (y de caja blanca). Por lo tanto, las técnicas de prueba basadas en la experiencia son complementarias a las técnicas de prueba de caja negra y de caja blanca, y tanto las técnicas de prueba de caja negra como las basadas en la experiencia se pueden utilizar en todos los SDLC."
            ]
        },
        {
            questionText: "Está probando un validador de PIN que acepta PIN válidos y rechaza PIN inválidos. Un PIN es una secuencia de dígitos. Un PIN es válido si consta de cuatro dígitos y al menos dos de ellos son diferentes. ¿Cuál de los siguientes conjuntos de datos de prueba de entrada cubre todas las particiones de equivalencia para este escenario?",
            options: [
                "112, 1111, 1234, 123456",
                "1, 123, 1111, 1234",
                "12, 112, 1112, 11112",
                "1, 111, 1111, 11111"
            ],
            correctAnswerIndex: 0,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "Es correcto. Hay cinco particiones equivalentes: (Entrada) Longitud: L1: Entre 1 y 3; L2: 4; L3: superior a 4. (Entrada) Dígitos: D1: PIN con todos los dígitos iguales; D2: PIN con al menos dos dígitos diferentes. (Salida) Dos particiones: G1: PIN legal (cumple L2 y D2); G2: PIN ilegal. La opción a) cubre: 112 (D2, L1, G2); 1111 (D1, L2, G2); 1234 (D2, L2, G1); 123456 (D2, L3, G2). Todas las particiones están cubiertas.",
                "No es correcto. No cubre L3.",
                "No es correcto. No cubre D1.",
                "No es correcto. No cubre D2 (y G1)."
            ]
        },
        {
            questionText: "Un desarrollador recibió la orden de implementar la siguiente regla de negocio: ENTRADA: valor (número entero). SI (valor ≤ 100 O valor ≥ 200) ENTONCES escribir 'valor incorrecto' SINO escribir 'valor OK'. Usted diseña los casos de prueba utilizando el análisis de valores límite de 2 valores. ¿Cuál de los siguientes conjuntos de entradas de prueba logra la mayor cobertura?",
            options: [
                "100, 150, 200, 201",
                "99, 100, 200, 201",
                "98, 99, 100, 101",
                "101, 150, 199, 200"
            ],
            correctAnswerIndex: 3,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Solo 100 y 200 son elementos de cobertura válidos para BVA de 2 valores, por lo que logramos una cobertura del 50%.",
                "No es correcto. 99, 100, 200, 201 son los 4 valores límite. Este conjunto los cubre a todos y logra el 100%. Sin embargo, la pregunta pide el que logra *mayor* cobertura, y la opción d) también logra el 100%. Pero el valor 150 de la opción d) está en el medio de la partición válida, que no es un valor límite.",
                "No es correcto. Solo 100 y 101 son elementos de cobertura válidos para BVA de 2 valores, por lo que logramos una cobertura del 50%.",
                "Es correcto. Las particiones de equivalencia son: {..., 99, 100}, {101, 102, ..., 198, 199}, {200, 201, ...}. Por lo tanto, hay 4 valores límite, que son: 100, 101, 199 y 200. En BVA de 2 valores, para cada valor límite hay dos elementos de cobertura (el valor límite y su vecino más cercano que pertenece a la partición adyacente). Como los vecinos más cercanos también son valores límite en la partición adyacente, solo hay cuatro elementos de cobertura. El conjunto d) contiene 101, 199, 200. Logra una cobertura del 75%."
            ]
        },
        {
            questionText: "Está trabajando en un proyecto para desarrollar un sistema que analice los resultados de los exámenes de conducir. Se le ha pedido que diseñe casos de prueba basados en la siguiente tabla de decisión: C1: ¿Primer intento en el examen? C2: ¿Examen teórico aprobado? C3: ¿Examen práctico aprobado? (ver tabla en el PDF) ¿Qué datos de prueba mostrarán que hay reglas contradictorias en la tabla de decisión?",
            options: [
                "C1=V, C2=V, C3=F",
                "C1=V, C2=F, C3=V",
                "C1=V, C2=V, C3=V y C1=F, C2=V, C3=V",
                "C1=F, C2=F, C3=F"
            ],
            correctAnswerIndex: 3,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. La combinación (V, V, F) no coincide con ninguna regla. Este es un ejemplo de omisión, no de contradicción.",
                "No es correcto. La combinación (V, F, V) coincide solo con una columna, R2, por lo que no hay contradicción.",
                "No es correcto. Ambas combinaciones (V, V, V) y (F, V, V) coinciden solo con una columna, R1, por lo que no hay contradicción.",
                "Es correcto. La combinación (F, F, F) coincide tanto con R2 como con R3, pero R2 y R3 tienen acciones diferentes, por lo que esto muestra una contradicción entre R2 y R3."
            ]
        },
        {
            questionText: "Está diseñando casos de prueba basados en el siguiente diagrama de transición de estados: (ver diagrama en el PDF). ¿Cuál es el número MÍNIMO de casos de prueba necesarios para lograr una cobertura del 100% de las transiciones válidas?",
            options: [
                "3", "2", "5", "6"
            ],
            correctAnswerIndex: 0,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "Es correcto. Las tres transiciones: 'REQUESTING -> CONFIRMED', 'WAITING LIST -> CONFIRMED', 'WAITING LIST -> END' no pueden aparecer en el mismo caso de prueba, lo que sugiere que se requieren al menos tres casos de prueba. Todas las demás transiciones pueden aparecer en combinación con una o más de estas tres transiciones, por lo que necesitamos un mínimo de tres casos de prueba. De hecho, solo son posibles tres secuencias: TC1: START -> REQUESTING -> CONFIRMED -> END. TC2: START -> REQUESTING -> WAITING LIST -> CONFIRMED -> END. TC3: START -> REQUESTING -> WAITING LIST -> END.",
                "No es correcto. Se necesitan al menos 3 casos de prueba.",
                "No es correcto. Se pueden cubrir todas las transiciones con 3 casos de prueba.",
                "No es correcto. Se pueden cubrir todas las transiciones con 3 casos de prueba."
            ]
        },
        {
            questionText: "Desea aplicar pruebas de rama al código representado por el siguiente grafo de flujo de control. (ver grafo en el PDF). ¿Cuántos elementos de cobertura necesita probar?",
            options: [
                "2", "4", "8", "7"
            ],
            correctAnswerIndex: 2,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Hay 8 ramas (aristas) en el grafo de flujo de control.",
                "No es correcto. Hay 8 ramas (aristas) en el grafo de flujo de control.",
                "Es correcto. En las pruebas de rama, los elementos de cobertura son las ramas, que están representadas por las aristas de un grafo de flujo de control. Hay 8 aristas en el grafo de flujo de control.",
                "No es correcto. Hay 8 ramas (aristas) en el grafo de flujo de control."
            ]
        },
        {
            questionText: "¿Cómo pueden ser útiles las pruebas de caja blanca en apoyo de las pruebas de caja negra?",
            options: [
                "Las medidas de cobertura de caja blanca pueden ayudar a los testers a evaluar las pruebas de caja negra en términos de la cobertura de código lograda por estas pruebas de caja negra.",
                "El análisis de cobertura de caja blanca puede ayudar a los testers a identificar fragmentos inalcanzables del código fuente.",
                "Las pruebas de rama subsumen las técnicas de prueba de caja negra, por lo que lograr una cobertura de rama completa garantiza lograr una cobertura completa de cualquier técnica de caja negra.",
                "Las técnicas de prueba de caja blanca pueden proporcionar elementos de cobertura para las técnicas de prueba de caja negra."
            ],
            correctAnswerIndex: 0,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "Es correcto. Realizar solo pruebas de caja negra no proporciona una medida de la cobertura real del código. Las medidas de cobertura de caja blanca proporcionan una medida objetiva de la cobertura y proporcionan la información necesaria para permitir que se generen pruebas adicionales para aumentar esta cobertura y, posteriormente, aumentar la confianza en el código.",
                "No es correcto. Esta afirmación es correcta, pero no tiene nada que ver con las pruebas de caja negra.",
                "No es correcto. En general, no existen relaciones de subsunción entre las técnicas de caja blanca y de caja negra.",
                "No es correcto. Las técnicas de caja blanca se utilizan para diseñar pruebas basadas en el objeto de prueba en sí, mientras que las técnicas de caja negra se utilizan para diseñar pruebas basadas en la especificación. Por lo tanto, no hay relación entre los elementos de cobertura derivados de estos dos tipos de técnicas."
            ]
        },
        {
            questionText: "Considere la siguiente lista: Entrada correcta no aceptada, Entrada incorrecta aceptada, Formato de salida incorrecto, División por cero. ¿Qué técnica de prueba es MÁS PROBABLE que utilice el tester que usa esta lista al realizar pruebas?",
            options: [
                "Pruebas exploratorias",
                "Ataque de fallos (Fault attack)",
                "Pruebas basadas en listas de verificación (Checklist-based testing)",
                "Análisis de valores límite"
            ],
            correctAnswerIndex: 1,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Las pruebas exploratorias utilizan cartas de prueba (test charters), no una lista de posibles defectos/fallos. Aunque las pruebas exploratorias pueden incorporar el uso de otras técnicas de prueba, en este caso el ataque de fallos es la opción más probable.",
                "Es correcto. Esta es una lista de posibles fallos. Los ataques de fallos son un enfoque metódico para la implementación de la adivinación de errores y requieren que el tester cree o adquiera una lista de posibles errores, defectos y fallos, y diseñe pruebas que identifiquen defectos asociados con los errores, expongan los defectos o causen los fallos.",
                "No es correcto. El tester está utilizando una lista de verificación de elementos para apoyar sus pruebas. Tanto la adivinación de errores como las pruebas basadas en listas de verificación utilizan tales listas; sin embargo, la lista aquí es de posibles fallos, no de condiciones de prueba, por lo que la técnica de prueba MÁS PROBABLE es el ataque de fallos, que se centra en errores, defectos y fallos.",
                "No es correcto. El BVA se basa en un análisis de los valores límite de las particiones de equivalencia. La lista anterior no menciona particiones de equivalencia ni sus límites."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones describe MEJOR cómo el uso de pruebas basadas en listas de verificación puede resultar en una mayor cobertura?",
            options: [
                "Los elementos de la lista de verificación se pueden definir a un nivel de detalle suficientemente bajo, para que el tester pueda implementar y ejecutar casos de prueba detallados basados en estos elementos.",
                "Las listas de verificación se pueden automatizar, por lo que cada vez que una ejecución de prueba automatizada cubre los elementos de la lista de verificación, resulta en una cobertura adicional.",
                "Cada elemento de la lista de verificación debe probarse por separado e independientemente, por lo que los elementos cubren diferentes áreas del software.",
                "Dos testers que diseñan y ejecutan pruebas basadas en los mismos elementos de lista de verificación de alto nivel realizarán típicamente las pruebas de maneras ligeramente diferentes."
            ],
            correctAnswerIndex: 3,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Aunque es cierto que el tester puede implementar y ejecutar casos de prueba detallados basados en la lista de verificación, no explica cómo esto resultaría en una mayor cobertura.",
                "No es correcto. Los elementos de la lista de verificación no deben automatizarse. Pero incluso si lo fueran, los scripts de prueba automatizados siempre ejecutan las pruebas de la misma manera, lo que generalmente no resulta en una mayor cobertura.",
                "No es correcto. Es cierto que cada elemento de la lista de verificación debe probarse por separado e independientemente. Pero esto afecta el orden de ejecución de las pruebas y no afecta la cobertura lograda, por lo que no resulta en una mayor cobertura.",
                "Es correcto. Si las listas de verificación son de alto nivel, es probable que ocurra cierta variabilidad en las pruebas reales, lo que resulta en una cobertura potencialmente mayor pero menos repetibilidad. Si dos testers siguen una lista de verificación de elementos de alto nivel, cada uno de ellos puede usar diferentes datos de prueba, pasos de prueba, etc. De esta manera, un tester probablemente cubrirá algunas áreas no cubiertas por el otro tester y esto resultará en una mayor cobertura."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes proporciona el MEJOR ejemplo de un criterio de aceptación orientado a escenarios?",
            options: [
                "La aplicación debe permitir a los usuarios eliminar su cuenta y todos los datos asociados a petición.",
                "Cuando un cliente añade un artículo a su carrito y procede al pago, se le debe solicitar que inicie sesión o cree una cuenta si aún no lo ha hecho.",
                "SI (contiene(producto(23).Nombre, carrito.productos())) ENTONCES devolver FALSO",
                "El sitio web debe cumplir con las Normas de Accesibilidad ICT 508 y garantizar que todo el contenido sea accesible para usuarios con discapacidades."
            ],
            correctAnswerIndex: 1,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Este criterio de aceptación describe qué reglas o regulaciones debe cumplir el sistema (en este caso, el derecho al olvido). Este es un ejemplo de un criterio de aceptación orientado a reglas.",
                "Es correcto. Este criterio de aceptación describe un escenario de ejemplo que debe ser realizable por el sistema. Este es un ejemplo de un criterio de aceptación orientado a escenarios.",
                "No es correcto. Esta frase parece más una línea de código que implementa alguna regla de negocio. Los criterios de aceptación deben escribirse en colaboración con los representantes de negocio y, por lo tanto, deben escribirse en un lenguaje que entiendan. Es muy probable que esta frase sea ininteligible para estas partes interesadas.",
                "No es correcto. Este criterio de aceptación describe qué reglas o regulaciones debe cumplir el sistema y cómo se garantizará el cumplimiento. Por lo tanto, este es un ejemplo de un criterio de aceptación orientado a reglas, no un criterio de aceptación basado en escenarios."
            ]
        },
        {
            questionText: "Está utilizando el desarrollo guiado por pruebas de aceptación y diseñando casos de prueba basados en la siguiente historia de usuario: 'Como usuario Regular o Especial, quiero poder usar mi tarjeta electrónica de piso para acceder a pisos específicos'. Criterios de Aceptación: AC1: Los usuarios regulares tienen acceso a los pisos 1 a 3. AC2: El piso 4 solo es accesible para usuarios Especiales. AC3: Los usuarios especiales tienen todos los derechos de acceso de los usuarios regulares. ¿Qué caso de prueba es el MÁS razonable para probar AC3?",
            options: [
                "Verificar que un usuario Regular puede acceder a los pisos 1 y 3.",
                "Verificar que un usuario Regular no puede acceder al piso 4.",
                "Verificar que un usuario Especial puede acceder al piso 5.",
                "Verificar que un usuario Especial puede acceder a los pisos 1, 2 y 3."
            ],
            correctAnswerIndex: 3,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Queremos verificar que los usuarios Especiales tienen los derechos de los usuarios Regulares, por lo que necesitamos probar los derechos de acceso para un usuario Especial, no para un usuario Regular.",
                "No es correcto. Queremos verificar que los usuarios Especiales tienen los derechos de los usuarios Regulares, por lo que necesitamos probar los derechos de acceso para un usuario Especial, no para un usuario Regular.",
                "No es correcto. No se describe ningún piso 5 en los criterios de aceptación. Los casos de prueba no deben extender el alcance de la historia de usuario. Pero incluso si quisiéramos realizar pruebas negativas, esta prueba no está directamente relacionada con AC3.",
                "Es correcto. De esta manera podemos verificar si un usuario Especial puede acceder a los pisos que son accesibles para un usuario Regular."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones NO es un propósito de un plan de pruebas?",
            options: [
                "Definir datos de prueba y resultados esperados para pruebas de componentes e integración de componentes.",
                "Definir como criterios de salida del nivel de prueba de componentes que 'se debe lograr una cobertura de sentencias del 100% y una cobertura de rama del 100%'.",
                "Describir qué campos debe contener el informe de progreso de las pruebas y cuál debe ser la forma de este informe.",
                "Explicar por qué las pruebas de integración de sistemas se excluirán de las pruebas, aunque la estrategia de prueba requiera este nivel de prueba."
            ],
            correctAnswerIndex: 0,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "Es correcto. El plan de pruebas puede incluir requisitos de datos de prueba (como parte del enfoque de prueba), pero no los datos de prueba detallados para los casos de prueba. Los datos de prueba son parte de los casos de prueba, no del plan de pruebas. Además, generalmente es imposible definir dichos datos cuando se crea el plan de pruebas, porque no se sabe exactamente cómo se verán los componentes.",
                "No es correcto. Uno de los propósitos de un plan de pruebas es ayudar a asegurar que las actividades de prueba realizadas cumplirán con los criterios establecidos, incluyendo criterios de entrada y de salida. Los criterios de cobertura de código son un ejemplo de dichos criterios para el nivel de prueba de componentes.",
                "No es correcto. Las plantillas de documentación son un contenido típico de un plan de pruebas. Esto ayuda a facilitar la comunicación entre las partes interesadas al definir una forma estándar de comunicación o informe.",
                "No es correcto. Uno de los propósitos de un plan de pruebas es demostrar que las pruebas se adherirán a la política de prueba y la estrategia de prueba existentes, o explicar por qué las pruebas se desviarán de ellas. Este es un ejemplo de explicación de la desviación, con respecto a los niveles de prueba que se seguirán (o no)."
            ]
        },
        {
            questionText: "Al comienzo de cada iteración, el equipo estima la cantidad de trabajo (en días-persona) que necesitarán para completar durante la iteración. Sea E(n) la cantidad estimada de trabajo para la iteración n, y sea A(n) la cantidad real de trabajo realizado en la iteración n. A partir de la tercera iteración, el equipo utiliza el siguiente modelo de estimación basado en la extrapolación: E(n) = (3 * A(n-1) + A(n-2)) / 4. El gráfico muestra la cantidad estimada y real de trabajo para las primeras cuatro iteraciones. (ver gráfico en el PDF). ¿Cuál es la cantidad estimada de trabajo para la iteración #5?",
            options: [
                "10.5 días-persona",
                "8.25 días-persona",
                "6.5 días-persona",
                "9.4 días-persona"
            ],
            correctAnswerIndex: 2,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. El cálculo es E(5) = (3*6 + 8) / 4 = 26 / 4 = 6.5.",
                "No es correcto. El cálculo es E(5) = (3*6 + 8) / 4 = 26 / 4 = 6.5.",
                "Es correcto. Del gráfico tenemos: A(4)=6 y A(3)=8 (las dos últimas cajas grises). De la fórmula obtenemos: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 días-persona.",
                "No es correcto. El cálculo es E(5) = (3*6 + 8) / 4 = 26 / 4 = 6.5."
            ]
        },
        {
            questionText: "Está preparando un cronograma de ejecución de pruebas para ejecutar siete casos de prueba TC 1 a TC 7. La siguiente figura incluye las prioridades de estos casos de prueba (1=máxima prioridad, 3=mínima prioridad). La figura también muestra las dependencias entre los casos de prueba mediante flechas. Por ejemplo, la flecha de TC 4 a TC 5 significa que TC 5 solo se puede ejecutar si TC 4 se ejecutó previamente. (ver diagrama en el PDF). ¿Qué caso de prueba debe ejecutarse en sexto lugar?",
            options: [
                "TC 3", "TC 5", "TC 6", "TC 2"
            ],
            correctAnswerIndex: 0,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "Es correcto. Queremos ejecutar los casos de prueba según sus prioridades, pero también debemos considerar las dependencias. Si solo consideramos las prioridades, queremos ejecutar primero TC 5 y TC 7 (máxima prioridad), luego TC 1, TC 3 y TC 4, y finalmente TC 2 y TC 6 (mínima prioridad). Sin embargo, para ejecutar TC 7, necesitamos ejecutar primero TC 4. Para ejecutar TC 5, necesitamos ejecutar TC 4 y TC 2, pero TC 2 está bloqueado por TC 1, que debe ejecutarse antes de TC 2. Por lo tanto, para ejecutar los casos de prueba de prioridad 1 lo antes posible, los primeros cinco casos de prueba deben ser: TC 4 - TC 7 - TC 1 - TC 2 - TC 5. A continuación, debemos ejecutar TC 3, porque tiene una prioridad más alta que TC 6. Por lo tanto, el cronograma completo será TC 4 – TC 7 – TC 1 – TC 2 – TC 5 – TC 3 - TC 6. Así que, el sexto caso de prueba será TC 3.",
                "No es correcto. TC 5 se ejecuta en quinto lugar.",
                "No es correcto. TC 6 se ejecuta en séptimo lugar.",
                "No es correcto. TC 2 se ejecuta en cuarto lugar."
            ]
        },
        {
            questionText: "¿Qué muestra el modelo de la pirámide de pruebas?",
            options: [
                "Que las pruebas pueden tener diferentes prioridades.",
                "Que las pruebas pueden tener diferente granularidad.",
                "Que las pruebas pueden requerir diferentes criterios de cobertura.",
                "Que las pruebas pueden depender de otras pruebas."
            ],
            correctAnswerIndex: 1,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. El modelo de la pirámide de pruebas no proporciona información sobre las prioridades de las pruebas.",
                "Es correcto. El modelo de la pirámide de pruebas muestra que diferentes pruebas tienen diferentes niveles de granularidad.",
                "No es correcto. El modelo de la pirámide de pruebas es independiente de los criterios de cobertura.",
                "No es correcto. El modelo de la pirámide de pruebas no muestra ninguna relación entre diferentes pruebas."
            ]
        },
        {
            questionText: "¿Cuál es la relación entre los cuadrantes de prueba, los niveles de prueba y los tipos de prueba?",
            options: [
                "Los cuadrantes de prueba representan combinaciones particulares de niveles de prueba y tipos de prueba, definiendo su ubicación en el ciclo de vida de desarrollo de software.",
                "Los cuadrantes de prueba describen el grado de granularidad de los tipos de prueba individuales realizados en cada nivel de prueba.",
                "Los cuadrantes de prueba asignan los tipos de prueba que se pueden realizar a los niveles de prueba.",
                "Los cuadrantes de prueba agrupan los niveles de prueba y los tipos de prueba según varios criterios, como dirigirse a partes interesadas específicas."
            ],
            correctAnswerIndex: 3,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. Los cuadrantes de prueba agrupan los niveles de prueba y los tipos de prueba por separado según varios criterios. No representan ninguna combinación de niveles de prueba y tipos de prueba y no están relacionados con ninguna ubicación dentro de un ciclo de vida de desarrollo de software. Tanto los niveles de prueba como los tipos de prueba se tratan por separado en el modelo de cuadrantes de prueba.",
                "No es correcto. Los cuadrantes de prueba agrupan los niveles de prueba y los tipos de prueba según varios criterios. No describen el grado de granularidad de los tipos de prueba individuales realizados en cada nivel de prueba. Dicho modelo, con respecto a los niveles de prueba, se llama la pirámide de pruebas.",
                "No es correcto. La afirmación es incorrecta, porque en general cualquier tipo de prueba se puede realizar en cualquier nivel de prueba.",
                "Es correcto. Los cuadrantes de prueba agrupan los niveles de prueba, los tipos de prueba, las actividades, las técnicas de prueba y los productos de trabajo en el desarrollo de software ágil. En este modelo, las pruebas pueden estar orientadas al negocio o a la tecnología. Las pruebas pueden apoyar al equipo (es decir, guiar el desarrollo) o criticar el producto (es decir, medir su comportamiento frente a las expectativas). La combinación de estos dos puntos de vista determina los cuatro cuadrantes."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones es un ejemplo de cómo el análisis de riesgos del producto puede influir en la minuciosidad y el alcance de las pruebas?",
            options: [
                "El monitoreo continuo de riesgos nos permite identificar riesgos emergentes lo antes posible.",
                "La identificación de riesgos nos permite implementar actividades de mitigación de riesgos y reducir el nivel de riesgo.",
                "El nivel de riesgo evaluado nos ayuda a seleccionar el rigor de las pruebas.",
                "El análisis de riesgos nos permite derivar elementos de cobertura."
            ],
            correctAnswerIndex: 2,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. El monitoreo de riesgos es parte del control de riesgos, no del análisis de riesgos.",
                "No es correcto. La identificación de riesgos en sí misma no nos permite implementar actividades de mitigación de riesgos. Las acciones de mitigación se definen durante la fase de control de riesgos.",
                "Es correcto. Este es un ejemplo de cómo el análisis de riesgos influye en la minuciosidad y el alcance de las pruebas.",
                "No es correcto. Los elementos de cobertura se derivan utilizando técnicas de prueba, no a través del análisis de riesgos."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes actividades en el proceso de prueba hace el MAYOR uso de los informes de progreso de las pruebas?",
            options: [
                "Diseño de pruebas",
                "Finalización de pruebas",
                "Análisis de pruebas",
                "Planificación de pruebas"
            ],
            correctAnswerIndex: 1,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. Los informes de progreso de las pruebas se utilizan principalmente durante la monitorización y el control de las pruebas, y la finalización de las pruebas, no durante el diseño de las pruebas.",
                "Es correcto. Se prepara un informe de finalización de pruebas durante la finalización de las pruebas, cuando un proyecto, nivel de prueba o tipo de prueba está completo y cuando, idealmente, se han cumplido sus criterios de salida. Este informe utiliza información de los informes de progreso de las pruebas y otros datos.",
                "No es correcto. Los informes de progreso de las pruebas se utilizan principalmente durante la monitorización y el control de las pruebas, y la finalización de las pruebas, no durante el análisis de las pruebas.",
                "No es correcto. Los informes de progreso de las pruebas se utilizan principalmente durante la monitorización y el control de las pruebas, y la finalización de las pruebas, no durante la planificación de las pruebas."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones NO es un ejemplo de cómo la gestión de la configuración apoya a las pruebas?",
            options: [
                "Todos los commits al repositorio se identifican de forma única y se controlan por versión.",
                "Todos los cambios en los elementos del entorno de prueba son rastreados.",
                "Todas las especificaciones de requisitos se referencian sin ambigüedades en los planes de prueba.",
                "Todos los defectos identificados tienen un estado asignado."
            ],
            correctAnswerIndex: 3,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. Cuando un usuario informa un fallo de software, gracias a la identificación única de los commits, es posible reensamblar los archivos de la versión de software que utilizó el usuario (así como las versiones correspondientes de los scripts de prueba) y así reproducir el fallo y localizar el defecto más rápidamente.",
                "No es correcto. Si un cambio en el entorno de prueba causa problemas inesperados durante las pruebas, la gestión de la configuración permite a los testers volver a una versión anterior del entorno. Esto asegura que las pruebas puedan continuar sin verse afectadas por el cambio.",
                "No es correcto. La gestión de la configuración asegura que toda la documentación identificada (p. ej., especificaciones de requisitos) y los elementos de software se referencian sin ambigüedades en la documentación de prueba (p. ej., planes de prueba).",
                "Es correcto. Esto lo asegura la gestión de defectos, no el proceso de gestión de la configuración."
            ]
        },
        {
            questionText: "Considere el siguiente informe de defectos para una aplicación de compras basada en la web: Aplicación: WebShop v0.99. Defecto: El botón de inicio de sesión no funciona. Pasos para reproducir: Lanzar el sitio web. Hacer clic en el botón de inicio de sesión. Resultado esperado: El usuario debe ser redirigido a la página de inicio de sesión. Resultado real: El botón de inicio de sesión no responde cuando se hace clic. Severidad: Alta. Prioridad: Urgente. ¿Cuál es la información MÁS importante que falta en este informe?",
            options: [
                "Nombre del tester y fecha del informe.",
                "Elementos del entorno de prueba y sus números de versión.",
                "Identificación del objeto de prueba.",
                "Impacto en los intereses de las partes interesadas."
            ],
            correctAnswerIndex: 1,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. Esto es importante, pero no tan importante como los elementos del entorno de prueba.",
                "Es correcto. Lo importante que falta es la identificación del navegador y el dispositivo utilizado para las pruebas. La información del navegador y del dispositivo es importante porque dicho defecto puede ser específico del navegador o del dispositivo. Por ejemplo, un botón de inicio de sesión puede funcionar bien en un navegador (o una versión de un navegador específico) pero no en otro. Por lo tanto, la información del navegador y del dispositivo puede ayudar a los desarrolladores a reproducir el problema y encontrar la causa raíz del problema más rápidamente.",
                "No es correcto. El objeto de prueba está identificado (WebShop v0.99).",
                "No es correcto. El impacto está incluido: esto es la severidad (alta)."
            ]
        },
        {
            questionText: "Las herramientas de cuál de las siguientes categorías ayudan con la organización de casos de prueba, defectos detectados y gestión de la configuración?",
            options: [
                "Herramientas de ejecución de pruebas y cobertura.",
                "Herramientas de diseño e implementación de pruebas.",
                "Herramientas de gestión de defectos.",
                "Herramientas de gestión de pruebas."
            ],
            correctAnswerIndex: 3,
            chapter: "6. Herramientas de Soporte para Pruebas",
            rationales: [
                "No es correcto. Las herramientas de ejecución de pruebas y cobertura facilitan la ejecución automatizada de casos de prueba y la medición de la cobertura lograda al ejecutar esos casos de prueba. Sin embargo, estas herramientas no ayudan con la organización de defectos y la gestión de la configuración.",
                "No es correcto. Las herramientas de diseño e implementación de pruebas facilitan la generación de casos de prueba, datos de prueba y procedimientos de prueba, pero no ayudan con la organización de defectos y la gestión de la configuración.",
                "No es correcto. Las herramientas de gestión de defectos se utilizan para gestionar defectos, pero no son herramientas de prueba y no se utilizan para organizar casos de prueba o la gestión de la configuración.",
                "Es correcto. Las herramientas de gestión de pruebas aumentan la eficiencia del proceso de prueba al facilitar la gestión del ciclo de vida de desarrollo de software (SDLC), los requisitos, las pruebas, los defectos y la gestión de la configuración."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes es MÁS probable que sea un beneficio de la automatización de pruebas?",
            options: [
                "La capacidad de generar casos de prueba sin acceso a la base de pruebas.",
                "El logro de una mayor cobertura a través de una evaluación más objetiva.",
                "El aumento de los tiempos de ejecución de pruebas disponibles con mayor potencia de procesamiento.",
                "La prevención de errores humanos a través de una mayor consistencia y repetibilidad."
            ],
            correctAnswerIndex: 3,
            chapter: "6. Herramientas de Soporte para Pruebas",
            rationales: [
                "No es correcto. 'La capacidad de generar casos de prueba sin acceso a la base de pruebas' no es posible. La generación de casos de prueba por parte de testers o herramientas requiere acceso a la base de pruebas.",
                "No es correcto. 'El logro de una mayor cobertura a través de una evaluación más objetiva' no es un beneficio directo de la automatización de pruebas. La automatización de pruebas proporcionará una evaluación más objetiva de la cobertura, sin embargo, esa evaluación objetiva no aumentará la cobertura. Solo utilizando los resultados de la cobertura para escribir más casos de prueba puede aumentar posiblemente la cobertura.",
                "No es correcto. 'El aumento de los tiempos de ejecución de pruebas disponibles con mayor potencia de procesamiento' es una afirmación contradictoria, ya que una mayor potencia de procesamiento normalmente reduciría los tiempos de ejecución, y el aumento de los tiempos de ejecución no es un beneficio, ya que las pruebas tardarían más.",
                "Es correcto. La prevención de errores humanos a través de una mayor consistencia y repetibilidad es un beneficio de la automatización de pruebas, ya que la automatización de pruebas no puede sufrir errores humanos. Por ejemplo, significa que las pruebas se derivan consistentemente de los requisitos, los datos de prueba se crean de manera sistemática y las pruebas son ejecutadas por una herramienta en el mismo orden con la misma frecuencia."
            ]
        }
        ]
    },
    {
      id: "istqb_exam_d",
      title: "Examen de Práctica D (Oficial)",
      questions: [
        {
            questionText: "¿Cuál de los siguientes es un objetivo de prueba típico?",
            options: [
                "Encontrar y corregir defectos en el objeto de prueba.",
                "Mantener comunicaciones efectivas con los desarrolladores.",
                "Validar que se han cumplido los requisitos legales.",
                "Construir confianza en la calidad del objeto de prueba."
            ],
            correctAnswerIndex: 3,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto. Encontrar y corregir defectos en el objeto de prueba no es un objetivo de prueba típico, ya que, aunque identificar defectos es un objetivo de las pruebas, corregir defectos no es una actividad de prueba.",
                "No es correcto. Mantener comunicaciones efectivas con los desarrolladores no es un objetivo de prueba típico, ya que, aunque es útil para lograr otros objetivos de las pruebas, como proporcionar a las partes interesadas información que les permita tomar decisiones informadas, no es una razón principal para realizar pruebas.",
                "No es correcto. Validar que se han cumplido los requisitos legales no es un objetivo de prueba típico porque la validación se ocupa de verificar si el sistema satisface las necesidades de los usuarios y otras partes interesadas en su entorno operativo. Verificar que se han cumplido los requisitos legales es una forma de verificación.",
                "Es correcto. Construir confianza en la calidad del objeto de prueba se logra ejecutando pruebas que pasan."
            ]
        },
        {
            questionText: "Un diseñador documenta un diseño para una interfaz de usuario que no aborda adecuadamente a los usuarios con discapacidad porque el diseñador está cansado. El programador implementa la interfaz de usuario de acuerdo con el diseño pero, como está trabajando bajo una fuerte presión de tiempo, no incluye un manejo de excepciones adecuado en su código de programa para los cálculos de bonificaciones. Cuando se utiliza el sistema operativo, algunos usuarios con discapacidad se quejan de la interfaz y la empresa es multada posteriormente por la autoridad reguladora pertinente. Nadie se da cuenta de que los cálculos de bonificaciones a veces son incorrectos. ¿Cuál de las siguientes afirmaciones es CORRECTA?",
            options: [
                "El cálculo erróneo de las bonificaciones es un defecto que ocurre ocasionalmente.",
                "La multa recibida por no atender a algunos usuarios con discapacidad es un fallo.",
                "El programador que trabaja bajo una fuerte presión de tiempo es una causa raíz.",
                "El diseño de la interfaz de usuario incluye un error del diseñador."
            ],
            correctAnswerIndex: 2,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto. El cálculo erróneo de las bonificaciones es un fallo del sistema, no un defecto.",
                "No es correcto. El sistema que no soporta adecuadamente a los usuarios con discapacidad es un fallo que finalmente resulta en una multa, pero la multa en sí no es un fallo (parece ser el funcionamiento correcto del sistema regulatorio).",
                "Es correcto. El error lo comete el programador y este error es causado por su trabajo bajo una fuerte presión de tiempo, que es la causa raíz del defecto subsecuente.",
                "No es correcto. El mal diseño de la interfaz de usuario, que no aborda adecuadamente a los usuarios con discapacidad, es un defecto de diseño causado por el error del diseñador. Por lo tanto, el diseño de la interfaz de usuario incluye un defecto de diseño, no un error del diseñador."
            ]
        },
        {
            questionText: "Los testers están utilizando condiciones de prueba para generar casos de prueba y ejecutar pruebas. Aunque las condiciones de prueba permanecen iguales, los casos de prueba se varían cada vez. ¿Cuál de los siguientes 'principios de las pruebas' se está abordando mediante la variación de los casos de prueba?",
            options: [
                "Las pruebas se desgastan.",
                "Falacia de ausencia de defectos.",
                "Las pruebas tempranas ahorran tiempo y dinero.",
                "Los defectos se agrupan."
            ],
            correctAnswerIndex: 0,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "Es correcto. El principio de 'las pruebas se desgastan' se refiere a la idea de que repetir pruebas idénticas en un código inalterado es poco probable que descubra nuevos defectos y, por lo tanto, modificar las pruebas puede ser esencial. Al usar condiciones de prueba para generar nuevas pruebas cada vez, las pruebas no serán idénticas y se reduce el riesgo de que las pruebas se desgasten.",
                "No es correcto. El principio de 'falacia de ausencia de defectos' se refiere a asegurar que se cumplan las necesidades de los usuarios incluso si se realizan muchas pruebas y no se encuentran defectos (es decir, la validación también es necesaria). El uso de condiciones de prueba para generar casos de prueba y ejecutar pruebas no aborda directamente esta preocupación.",
                "No es correcto. El principio de 'las pruebas tempranas ahorran tiempo y dinero' se refiere a corregir defectos tempranamente para prevenir la ocurrencia de defectos subsecuentes en productos de trabajo derivados, reduciendo así los costos y la probabilidad de fallos. Esto generalmente se aborda comenzando las pruebas (tanto estáticas como dinámicas) lo antes posible, pero no se aborda mediante el uso de condiciones de prueba para generar casos de prueba y ejecutar pruebas.",
                "No es correcto. El principio de 'los defectos se agrupan' se refiere a la distribución de defectos en un sistema, que típicamente sigue una distribución de Pareto. El uso de condiciones de prueba para generar casos de prueba y ejecutar pruebas no aborda esta preocupación, que generalmente se aborda con pruebas basadas en riesgos."
            ]
        },
        {
            questionText: "Dadas las siguientes tareas de prueba: 1. Derivar casos de prueba a partir de condiciones de prueba. 2. Identificar testware reutilizable. 3. Organizar casos de prueba en procedimientos de prueba. 4. Evaluar la base de pruebas y el objeto de prueba. Y las siguientes actividades de prueba: A. Análisis de pruebas, B. Diseño de pruebas, C. Implementación de pruebas, D. Finalización de pruebas. ¿Cuál de las siguientes opciones MEJOR coincide con las tareas y las actividades?",
            options: [
                "1B, 2A, 3D, 4C",
                "1B, 2D, 3C, 4A",
                "1C, 2A, 3B, 4D",
                "1C, 2D, 3A, 4B"
            ],
            correctAnswerIndex: 1,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto.",
                "Es correcto. El diseño de pruebas (B) implica derivar casos de prueba (1). La finalización de pruebas (D) incluye identificar testware reutilizable (2). La implementación de pruebas (C) incluye organizar los casos en procedimientos (3). El análisis de pruebas (A) implica evaluar la base de pruebas (4).",
                "No es correcto.",
                "No es correcto."
            ]
        },
        {
            questionText: "Dado el siguiente testware: i. Informe de finalización de pruebas, ii. Datos en una base de datos para entradas y resultados esperados, iii. Lista de elementos para construir el entorno de prueba, iv. Secuencias documentadas de casos de prueba en orden de ejecución, v. Casos de prueba. ¿Cuál de los siguientes muestra MEJOR el testware producido como resultado de realizar la implementación de pruebas?",
            options: [
                "ii, iv",
                "iii, v",
                "i, ii, v",
                "i, iii, iv"
            ],
            correctAnswerIndex: 0,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "Es correcto. La implementación de pruebas produce los siguientes resultados: procedimientos de prueba (iv), scripts de prueba automatizados, suites de pruebas, datos de prueba (ii), cronograma de ejecución de pruebas y elementos del entorno de prueba como stubs, drivers, simuladores y virtualizaciones de servicios.",
                "No es correcto. Los elementos iii y v son resultados del diseño de pruebas.",
                "No es correcto. El elemento i es un resultado de la finalización de pruebas.",
                "No es correcto. El elemento i es un resultado de la finalización de pruebas y el iii del diseño de pruebas."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones describe MÁS probablemente una tarea realizada por alguien en un rol de gestión de pruebas?",
            options: [
                "Evaluar la base de pruebas y el objeto de prueba.",
                "Definir los requisitos del entorno de prueba.",
                "Evaluar la testabilidad del objeto de prueba.",
                "Crear el informe de finalización de pruebas."
            ],
            correctAnswerIndex: 3,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto. El rol de pruebas es principalmente responsable de los aspectos técnicos y de ingeniería de las pruebas, como el análisis, diseño, implementación y ejecución de pruebas. Evaluar la base de pruebas para detectar defectos y el objeto de prueba para su testabilidad son tareas realizadas como parte del análisis de pruebas, por lo que es probable que sean tareas realizadas por el rol de pruebas.",
                "No es correcto. El rol de pruebas es principalmente responsable de los aspectos técnicos y de ingeniería de las pruebas, como el análisis, diseño, implementación y ejecución de pruebas. Definir los requisitos del entorno de prueba es una tarea realizada como parte del diseño de pruebas, por lo que es probable que sea una tarea realizada por el rol de pruebas.",
                "No es correcto. El rol de pruebas es principalmente responsable de los aspectos técnicos y de ingeniería de las pruebas, como el análisis, diseño, implementación y ejecución de pruebas. Evaluar la testabilidad de un objeto de prueba es una tarea realizada como parte del análisis de pruebas, por lo que es probable que sea una tarea realizada por el rol de pruebas.",
                "Es correcto. El rol de gestión de pruebas implica principalmente actividades relacionadas con la planificación, monitorización y control de pruebas, y finalización de pruebas. Por lo tanto, crear el informe de finalización de pruebas, que es el resultado principal de la actividad de finalización de pruebas, es probable que sea una tarea realizada por el rol de gestión de pruebas."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes es una ventaja del enfoque de 'equipo completo' (whole team approach)?",
            options: [
                "Mejora de la comunicación entre los miembros del equipo.",
                "Disminución de la responsabilidad individual por la calidad.",
                "Despliegue más rápido de los entregables a los usuarios finales.",
                "Reducción de la colaboración con los usuarios de negocio externos."
            ],
            correctAnswerIndex: 0,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "Es correcto. El enfoque de equipo completo promueve una comunicación y colaboración robustas entre los miembros del equipo.",
                "No es correcto. Si bien el enfoque de equipo completo prioriza la responsabilidad colectiva por la calidad, cada miembro individual del equipo sigue siendo igualmente responsable de la calidad.",
                "No es correcto. El enfoque de equipo completo se trata de cómo trabaja el equipo en conjunto, con el objetivo de obtener entregables de mayor calidad, pero no necesariamente resulta en un despliegue más rápido para los usuarios finales.",
                "No es correcto. Al utilizar el enfoque de equipo completo, los testers trabajan con representantes de negocio para crear pruebas de aceptación. No hay ninguna sugerencia de que el enfoque reducirá la colaboración con los usuarios de negocio externos."
            ]
        },
        {
            questionText: "Dados los siguientes beneficios e inconvenientes de la independencia de las pruebas: i. Los testers trabajan en una ubicación diferente a la de los desarrolladores. ii. Los testers cuestionan las suposiciones que hacen los programadores al escribir el código. iii. Se ha establecido una dinámica de confrontación entre testers y desarrolladores. iv. Los desarrolladores se han convencido de que los testers son los principales responsables de la calidad. v. Los testers tienen sesgos diferentes a los de los desarrolladores. ¿Cuáles son MÁS probablemente considerados beneficios?",
            options: [
                "i, iv",
                "ii, v",
                "i, iii, iv",
                "ii, iii, v"
            ],
            correctAnswerIndex: 1,
            chapter: "1. Fundamentos de las Pruebas",
            rationales: [
                "No es correcto.",
                "Es correcto. Los testers y desarrolladores tienen antecedentes, puntos de vista técnicos y sesgos potenciales variados, lo que permite a los testers desafiar útilmente las suposiciones hechas por las partes interesadas durante la especificación e implementación del sistema. Por lo tanto, ii y v son beneficios.",
                "No es correcto.",
                "No es correcto."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes es una buena práctica de prueba que se aplica a todos los ciclos de vida de desarrollo de software?",
            options: [
                "Cada nivel de prueba tiene objetivos de prueba específicos y distintos.",
                "La implementación y ejecución de pruebas para un nivel de prueba dado debe comenzar durante la fase de desarrollo correspondiente.",
                "Los testers deben comenzar el diseño de pruebas tan pronto como estén disponibles los borradores de los productos de trabajo relevantes.",
                "Toda actividad de prueba dinámica tiene una actividad de prueba estática correspondiente."
            ],
            correctAnswerIndex: 0,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
                "Es correcto. Cada nivel de prueba tiene objetivos de prueba específicos y distintos, ya que en cada nivel de prueba se prueba una forma diferente del objeto de prueba (p. ej., un solo componente, un sistema completo) y los objetivos de prueba superpuestos conducirían a una duplicación innecesaria.",
                "No es correcto. El análisis y diseño de pruebas para un nivel de prueba dado debe comenzar durante la fase de desarrollo correspondiente para facilitar las pruebas tempranas (p. ej., el análisis y diseño de pruebas de aceptación debe comenzar durante el análisis de requisitos). La implementación de pruebas generalmente comenzará más tarde, y la ejecución de pruebas comenzará durante el nivel de prueba.",
                "No es correcto. El diseño de pruebas para un nivel de prueba dado debe comenzar durante la fase de desarrollo correspondiente para facilitar las pruebas tempranas; sin embargo, el diseño de pruebas (p. ej., la generación de casos de prueba) debe basarse en una base de pruebas acordada, no en un borrador temprano; de lo contrario, se puede desperdiciar un esfuerzo de prueba significativo en la creación de casos de prueba para un diseño que luego cambia.",
                "No es correcto. El control de calidad se aplica a todas las actividades de desarrollo, lo que significa que cada actividad de desarrollo de software tiene una actividad de prueba correspondiente. Sin embargo, la misma simetría no se aplica a las pruebas dinámicas y estáticas. Hay algunas actividades de prueba estática (p. ej., análisis estático) para las cuales no hay una actividad de prueba dinámica correspondiente obvia."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes es un ejemplo de un enfoque de 'primero la prueba' (test-first) para el desarrollo?",
            options: [
                "Desarrollo Guiado por Comportamiento (Behavior-Driven Development)",
                "Desarrollo Guiado por Nivel de Prueba (Test Level Driven Development)",
                "Desarrollo Guiado por Funciones (Function-Driven Development)",
                "Desarrollo Guiado por Rendimiento (Performance-Driven Development)"
            ],
            correctAnswerIndex: 0,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
                "Es correcto. El Desarrollo Guiado por Comportamiento (BDD) es un ejemplo bien conocido de un enfoque de 'primero la prueba' para el desarrollo.",
                "No es correcto.",
                "No es correcto.",
                "No es correcto."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones es MÁS probable que sea un desafío encontrado al implementar DevOps?",
            options: [
                "Asegurarse de que no se pasen por alto las características de calidad no funcionales.",
                "Gestionar entornos de prueba que cambian continuamente.",
                "La necesidad de más testers manuales con experiencia adecuada.",
                "Configurar la automatización de pruebas como parte del pipeline de entrega."
            ],
            correctAnswerIndex: 3,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
                "No es correcto. DevOps generalmente aumenta la visibilidad de las características de calidad no funcionales, como el rendimiento y la fiabilidad.",
                "No es correcto. Los procesos automatizados como la integración/entrega continua (CI/CD) utilizados en DevOps facilitan entornos de prueba estables.",
                "No es correcto. Los procesos automatizados como CI/CD utilizados en DevOps generalmente reducen la necesidad de pruebas manuales.",
                "Es correcto. La implementación de DevOps puede presentar varios riesgos y desafíos, incluida la necesidad de definir y configurar el pipeline de entrega, introducir y mantener herramientas de CI/CD, y establecer y mantener la automatización de pruebas."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones describe MEJOR las retrospectivas?",
            options: [
                "Las retrospectivas permiten a los miembros del equipo identificar a otros miembros del equipo que no contribuyeron plenamente a lograr la calidad requerida por el enfoque de equipo completo.",
                "Las retrospectivas brindan a los testers la oportunidad de identificar actividades que fueron exitosas para que se mantengan cuando se realicen mejoras potenciales en el futuro.",
                "Las retrospectivas son donde los miembros del equipo ágil pueden expresar sus preocupaciones sobre la gestión y los clientes en un entorno libre de culpas.",
                "Las retrospectivas brindan a los miembros del equipo ágil un foro donde se centran en discutir el plan y las decisiones técnicas para la próxima iteración."
            ],
            correctAnswerIndex: 1,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
                "No es correcto. Los beneficios de las retrospectivas incluyen la creación de vínculos en el equipo y el aprendizaje al compartir problemas, y una mejor colaboración entre desarrolladores y testers a través de la revisión y mejora de las prácticas de trabajo. Señalar a individuos que un miembro del equipo puede sentir que no contribuyeron plenamente a lograr la calidad requerida por el enfoque de equipo completo no contribuirá a esta creación de vínculos y colaboración en el equipo.",
                "Es correcto. Durante la retrospectiva, el grupo discute qué aspectos del proyecto fueron exitosos y deben mantenerse, así como las áreas que podrían mejorarse y cómo hacerlo.",
                "No es correcto. Los beneficios de las retrospectivas se basan en una mayor efectividad y eficiencia a través de mejoras en los procesos; no son una oportunidad para desahogarse y criticar a la gestión y a los clientes. Además, los resultados se registran, generalmente en el informe de finalización de pruebas, por lo que cualquier cosa que se diga en la reunión podría ser leída por otras partes interesadas.",
                "No es correcto. Las retrospectivas son reuniones que generalmente se llevan a cabo al final de una iteración donde los miembros del equipo se centrarán en discutir los problemas relacionados con la calidad que han ocurrido en la iteración actual. No se utilizan para hacer planes o decisiones técnicas para la próxima iteración; esto se haría en la reunión de planificación de la iteración al comienzo de la próxima iteración."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes pruebas es MÁS probable que se realice como parte de las pruebas funcionales?",
            options: [
                "La prueba comprueba que la función de ordenación coloca los elementos de la lista o matriz en orden ascendente.",
                "La prueba comprueba si la función de ordenación completa la ordenación en un segundo desde su inicio.",
                "La prueba comprueba con qué facilidad se puede cambiar la función de ordenación de ascendente a descendente.",
                "La prueba comprueba que la función de ordenación sigue funcionando correctamente cuando se mueve de una arquitectura de 32 bits a una de 64 bits."
            ],
            correctAnswerIndex: 0,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
                "Es correcto. Verificar que la función de ordenación coloca los elementos de la lista o matriz en orden ascendente es evaluar la corrección funcional de la función de ordenación, que es parte de las pruebas funcionales.",
                "No es correcto. Evaluar si la función de ordenación cumple con su requisito no funcional de completarse en un segundo es parte de la prueba de su eficiencia de rendimiento, que es parte de las pruebas no funcionales.",
                "No es correcto. Evaluar la facilidad con la que la función de ordenación se puede modificar de orden ascendente a descendente es probar su modificabilidad, una forma de prueba de mantenibilidad no funcional, que es parte de las pruebas no funcionales.",
                "No es correcto. Evaluar que la función de ordenación sigue funcionando correctamente cuando se mueve de una arquitectura de 32 bits a una de 64 bits es probar su adaptabilidad, una forma de prueba de portabilidad, que es parte de las pruebas no funcionales."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes opciones es MÁS probable que sea un desencadenante que conduzca a pruebas de mantenimiento de un sistema de cambio de divisas?",
            options: [
                "Los desarrolladores informaron que cambiar el sistema de cambio de divisas era difícil y los testers decidieron verificar si esto era cierto.",
                "Se eliminó la opción de reembolso del sistema de cambio de divisas porque no siempre devolvía la cantidad correcta a los clientes.",
                "El equipo ágil ha comenzado a desarrollar una historia de usuario que agrega una nueva función de lealtad del cliente al sistema de cambio de divisas.",
                "La opción de soporte de idiomas del sistema de cambio de divisas se utilizó para habilitar transacciones de divisas tanto en inglés como en el idioma local."
            ],
            correctAnswerIndex: 1,
            chapter: "2. Pruebas a lo largo del ciclo de vida",
            rationales: [
                "No es correcto. Suponiendo que los testers pudieran verificar la facilidad de cambiar el sistema de cambio de divisas, se haría mediante pruebas de mantenibilidad en lugar de pruebas de mantenimiento, por lo que este no es un desencadenante para las pruebas de mantenimiento.",
                "Es correcto. Una modificación del sistema (como una corrección o una mejora) es un ejemplo de un desencadenante para las pruebas de mantenimiento. La eliminación de la opción de reembolso del sistema de cambio de divisas fue una corrección que conduciría a pruebas de mantenimiento.",
                "No es correcto. Si el equipo ágil ha comenzado a desarrollar una historia de usuario que agrega una nueva función de lealtad del cliente al sistema de cambio de divisas, esto resultará en que prueben la nueva función, y luego realizarían pruebas de regresión. No se requieren pruebas de mantenimiento en esta situación.",
                "No es correcto. La reconfiguración del sistema de cambio de divisas para admitir transacciones de divisas tanto en el idioma local como en inglés no es una modificación del sistema, un cambio en el entorno operativo o un retiro del sistema, que son los tres desencadenantes para las pruebas de mantenimiento."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes NO PUEDE ser examinado por pruebas estáticas?",
            options: [
                "Contrato",
                "Plan de pruebas",
                "Código encriptado",
                "Carta de prueba (test charter)"
            ],
            correctAnswerIndex: 2,
            chapter: "3. Pruebas Estáticas",
            rationales: [
                "No es correcto. La mayoría de los productos de trabajo pueden ser examinados usando alguna forma de prueba estática, y un contrato debe ser interpretable por humanos y podría ser revisado, lo cual es una forma de prueba estática.",
                "No es correcto. La mayoría de los productos de trabajo pueden ser examinados usando alguna forma de prueba estática, y un plan de pruebas debe ser interpretable por humanos y podría ser revisado, lo cual es una forma de prueba estática.",
                "Es correcto. La mayoría de los productos de trabajo pueden ser examinados usando alguna forma de prueba estática; sin embargo, no es adecuado para productos de trabajo que son demasiado complejos para la interpretación humana y no deben ser analizados por herramientas, y el código encriptado es demasiado complejo para los humanos y si está correctamente encriptado no será analizable por la mayoría de las herramientas.",
                "No es correcto. La mayoría de los productos de trabajo pueden ser examinados usando alguna forma de prueba estática, y una carta de prueba debe ser interpretable por humanos y podría ser revisada, lo cual es una forma de prueba estática."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes afirmaciones sobre el valor de las pruebas estáticas es CORRECTA?",
            options: [
                "Los tipos de defectos encontrados por las pruebas estáticas son diferentes de los tipos de defectos que pueden encontrarse mediante pruebas dinámicas.",
                "Las pruebas dinámicas pueden detectar los tipos de defectos que pueden encontrarse mediante pruebas estáticas más algunos tipos de defectos adicionales.",
                "Las pruebas dinámicas pueden identificar algunos de los defectos que pueden encontrarse mediante pruebas estáticas, pero no todos.",
                "Las pruebas estáticas pueden identificar los tipos de defectos que pueden encontrarse mediante pruebas dinámicas, así como algunos tipos de defectos adicionales."
            ],
            correctAnswerIndex: 2,
            chapter: "3. Pruebas Estáticas",
            rationales: [
                "No es correcto.",
                "No es correcto.",
                "Es correcto. Algunos tipos de defectos que solo pueden detectarse mediante pruebas estáticas, como código inalcanzable, patrones de diseño no implementados como se desea y defectos en productos de trabajo no ejecutables. Algunos tipos de defectos que pueden encontrarse tanto por pruebas estáticas como dinámicas, como un defecto de programación que puede ser observado por un revisor en una revisión de código y que causa un fallo observable durante las pruebas dinámicas. Y algunos tipos de defectos que solo pueden detectarse mediante pruebas dinámicas, como problemas de rendimiento o problemas de memoria que solo pueden observarse al ejecutar el código o el sistema.",
                "No es correcto."
            ]
        },
        {
            questionText: "Dadas las siguientes descripciones de actividades de revisión: 1. Se deliberan las anomalías detectadas y se llega a determinaciones sobre su estado, propiedad y cualquier paso adicional necesario. 2. Se registran los problemas y cualquier actualización necesaria se aborda antes de la aceptación del producto de trabajo. 3. Los revisores emplean técnicas para generar sugerencias y preguntas sobre el producto de trabajo y para detectar anomalías. 4. Se establece el objetivo de la revisión y su cronograma para asegurar una revisión enfocada y eficiente. 5. Se proporciona a los participantes acceso al ítem que se está revisando. ¿Cuál de las siguientes es la secuencia CORRECTA en el proceso de revisión de las actividades que corresponden a las descripciones?",
            options: [
                "4-3-5-2-1",
                "4-5-3-1-2",
                "5-4-1-3-2",
                "5-4-3-2-1"
            ],
            correctAnswerIndex: 1,
            chapter: "3. Pruebas Estáticas",
            rationales: [
                "No es correcto.",
                "Es correcto. El proceso de revisión genérico de ISO/IEC 20246, que se describe en el sílabo, comprende las siguientes actividades en este orden lógico: Planificación (4), Iniciación de la revisión (5), Revisión individual (3), Comunicación y análisis (1), Corrección e informe (2).",
                "No es correcto.",
                "No es correcto."
            ]
        },
        {
            questionText: "¿Qué participante en el proceso de revisión es responsable de asegurar que las reuniones de revisión se desarrollen eficazmente y que todos en las reuniones puedan expresar sus opiniones libremente?",
            options: [
                "Gerente (Manager)",
                "Moderador (Moderator)",
                "Presidente (Chairperson)",
                "Líder de Revisión (Review Leader)"
            ],
            correctAnswerIndex: 1,
            chapter: "3. Pruebas Estáticas",
            rationales: [
                "No es correcto. El gerente es responsable de decidir qué se debe revisar y de asignar recursos, como personal y tiempo, para la revisión.",
                "Es correcto. El moderador (o facilitador) es responsable de asegurar que las reuniones de revisión se desarrollen eficazmente, incluyendo la gestión del tiempo, la mediación de discusiones y la creación de un entorno seguro donde todos puedan expresar sus opiniones libremente.",
                "No es correcto. El presidente no es un rol reconocido en las revisiones.",
                "No es correcto. El líder de revisión es responsable de supervisar el proceso de revisión, como seleccionar a los miembros del equipo de revisión, programar las reuniones de revisión y asegurar que la revisión se complete con éxito."
            ]
        },
        {
            questionText: "Realiza pruebas de sistema de una aplicación web de comercio electrónico y se le proporciona el siguiente requisito: REQ 05-017. Si el costo total de las compras supera los $100, el cliente obtiene un 5% de descuento en compras posteriores. De lo contrario, el cliente no recibe ningún descuento. ¿Qué técnicas de prueba serán MÁS útiles para diseñar casos de prueba basados en este requisito?",
            options: [
                "Técnicas de prueba de caja blanca",
                "Técnicas de prueba de caja negra",
                "Técnicas de prueba basadas en la experiencia",
                "Técnicas de prueba basadas en riesgos"
            ],
            correctAnswerIndex: 1,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. El documento no se refiere a la estructura interna del objeto de prueba, sino que especifica el comportamiento deseado del objeto de prueba. Por lo tanto, las técnicas de prueba de caja blanca no serán útiles para diseñar casos de prueba.",
                "Es correcto. El documento es un requisito que especifica el comportamiento deseado del objeto de prueba. Por lo tanto, las técnicas de prueba más adecuadas en este caso son las técnicas de prueba de caja negra (p. ej., Análisis de Valores Límite o Pruebas de Tabla de Decisión).",
                "No es correcto. Aunque se pueden utilizar técnicas de prueba basadas en la experiencia para diseñar casos de prueba basados en este documento, las técnicas de prueba de caja negra serán más adecuadas. El documento describe una regla de negocio precisa y, además, una redacción como 'supera los $100' sugiere la existencia de límites importantes de partición de equivalencia que deberían probarse utilizando técnicas de prueba de caja negra como el Análisis de Valores Límite.",
                "No es correcto. Las técnicas de prueba basadas en riesgos no son un tipo reconocido de técnica de prueba."
            ]
        },
        {
            questionText: "El sistema de venta de entradas de cine calcula el tipo de descuento basándose en el año de nacimiento del cliente (BY) y en el año actual (CY). Sea D = CY - BY. Reglas: Si D<0, error. Si 0<=D<18, descuento de estudiante. Si 18<=D<65, sin descuento. Si D>=65, descuento de pensionista. Su suite de pruebas ya contiene: BY=1990, CY=2020 (sin descuento) y BY=2030, CY=2029 (error). ¿Cuáles de los siguientes conjuntos de datos de prueba deberían añadirse para lograr una cobertura completa de partición de equivalencia válida?",
            options: [
                "BY=1900, CY=1965 y BY=2000, CY=2000",
                "BY=2001, CY=2065 y BY=2011, CY=2029",
                "BY=1965, CY=1900 y BY=2001, CY=2065",
                "BY=1900, CY=1965 y BY=2011, CY=2029"
            ],
            correctAnswerIndex: 0,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "Es correcto. Las dos particiones de equivalencia que aún no están cubiertas corresponden al 'descuento de estudiante' y al 'descuento de pensionista'. La opción b) BY=1900, CY=1965 da D=65, que corresponde a la partición 'descuento de pensionista'. La opción e) BY=2000, CY=2000 da D=0, que corresponde a la partición 'descuento de estudiante'. Ambas particiones necesarias están cubiertas.",
                "No es correcto. La opción a) da D=64 ('sin descuento'). La opción d) da D=18 ('sin descuento').",
                "No es correcto. La opción c) da D=-65 ('error'). La opción a) da D=64 ('sin descuento').",
                "No es correcto. La opción d) da D=18 ('sin descuento')."
            ]
        },
        {
            questionText: "Está probando un sistema de control de temperatura para una instalación de almacenamiento en frío hortícola. El sistema recibe la temperatura (en grados Celsius enteros). Si está entre 0 y 2 grados inclusive, muestra 'temperatura OK'. Para temperaturas más bajas, muestra 'temperatura demasiado baja' y para más altas, 'temperatura demasiado alta'. Usando el análisis de valores límite de dos valores, ¿cuál de los siguientes conjuntos de entradas de prueba proporciona el mayor nivel de cobertura?",
            options: [
                "-1, 3",
                "0, 2",
                "-1, 0, 2, 3",
                "-2, 0, 2, 4"
            ],
            correctAnswerIndex: 2,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto.",
                "No es correcto.",
                "Es correcto. Hay tres particiones de equivalencia: {..., -2, -1}, {0, 1, 2}, {3, 4, ...}. Para BVA de 2 valores, se deben cubrir todos los valores límite para todas las particiones de equivalencia. Los valores límite son -1 (para la partición 'demasiado baja'), 0, 2 (para la partición 'OK') y 3 (para la partición 'demasiado alta'). Este conjunto los cubre todos.",
                "No es correcto."
            ]
        },
        {
            questionText: "Está diseñando casos de prueba basados en una tabla de decisión. Ya ha diseñado TC1, TC2, TC3 y TC4. ¿Cuál de los siguientes casos de prueba, al agregarse al conjunto existente, aumentará la cobertura de la tabla de decisión? (ver tabla en PDF)",
            options: [
                "Hombre de 66 años, no registrado, sin experiencia; resultado esperado: categoría B",
                "Mujer de 55 años, no registrada, con 2 años de experiencia; resultado esperado: categoría A",
                "Mujer de 19 años, registrada, con 5 años de experiencia; resultado esperado: categoría D",
                "Ningún caso de prueba adicional puede aumentar la cobertura ya lograda"
            ],
            correctAnswerIndex: 0,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "Es correcto. Los casos de prueba TC1, TC2, TC3 y TC4 cubren, respectivamente, las reglas R2, R3, R7 y R6 de la tabla de decisión. Las condiciones '66 años', 'no registrado' y 'sin experiencia' coinciden con la regla R4, que no está cubierta por los casos de prueba existentes, por lo que al agregar este caso de prueba, la cobertura de la tabla de decisión aumentará.",
                "No es correcto. Las condiciones '55 años', 'no registrada' y '2 años de experiencia' coinciden con la regla R2, ya cubierta por TC1. Por lo tanto, agregar este caso de prueba no aumentará la cobertura.",
                "No es correcto. Las condiciones '19 años', 'registrada' y '5 años de experiencia' coinciden con la regla R6, ya cubierta por TC4. Por lo tanto, agregar este caso de prueba no aumentará la cobertura.",
                "No es correcto. Los casos de prueba existentes cubren solo 4 de las 7 columnas de la tabla de decisión. La cobertura se puede aumentar agregando casos de prueba que cubran columnas aún no cubiertas, es decir, R1, R4 y R5."
            ]
        },
        {
            questionText: "Está aplicando pruebas de transición de estados a un sistema de reserva de habitaciones de hotel modelado por la tabla de transición de estados dada. Asumiendo que todos los casos de prueba comienzan en el estado 'Requesting', ¿cuál de los siguientes casos de prueba logra la mayor cobertura de transiciones válidas?",
            options: [
                "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel",
                "Available, ChangeRoom, NotAvailable, Available, Pay",
                "Available, ChangeRoom, Available, ChangeRoom, NotAvailable",
                "NotAvailable, Cancel, ChangeRoom, Available, Pay"
            ],
            correctAnswerIndex: 1,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Esta secuencia de cinco eventos cubre 4 transiciones válidas diferentes (ambos eventos 'NotAvailable' corresponden a la misma transición entre S1 y S3). Este caso de prueba cubre 4 de 7 transiciones válidas.",
                "Es correcto. Esta secuencia de cinco eventos cubre 5 transiciones diferentes (el primer evento 'Available' corresponde a una transición entre S1 y S2, y el segundo evento 'Available' corresponde a una transición entre S3 y S2, por lo que se cubren dos transiciones diferentes). Este caso de prueba cubre 5 de 7 transiciones válidas y logra la mayor cobertura de transiciones válidas.",
                "No es correcto. Esta secuencia de cinco eventos cubre 3 transiciones diferentes (ambos eventos 'Available' corresponden a la misma transición de S1 a S2; ambos eventos 'ChangeRoom' corresponden a la misma transición de S2 a S1). Este caso de prueba cubre 3 de 7 transiciones válidas.",
                "No es correcto. Esta secuencia de cinco eventos no representa un caso de prueba factible, porque después de 'Cancel' el sistema termina en el estado End y no se pueden ejecutar más transiciones válidas."
            ]
        },
        {
            questionText: "Su suite de pruebas S para un programa P logra una cobertura de sentencias del 100%. Consta de tres casos de prueba, cada uno de los cuales logra una cobertura de sentencias del 50%. ¿Cuál de las siguientes afirmaciones es CORRECTA?",
            options: [
                "La ejecución de S causará todos los fallos posibles en P.",
                "S logra una cobertura de rama del 100% para P.",
                "Toda sentencia ejecutable en P que contenga un defecto ha sido ejecutada al menos una vez durante la ejecución de S.",
                "Después de eliminar un caso de prueba de S, los dos casos de prueba restantes seguirán logrando una cobertura de sentencias del 100%."
            ],
            correctAnswerIndex: 2,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Una línea con un defecto, cuando se ejecuta, no tiene por qué causar un fallo. Por ejemplo, una línea x := y / z causará un fallo solo cuando z sea igual a 0.",
                "No es correcto. Una cobertura de sentencias del 100% no garantiza una cobertura de rama del 100%. Por ejemplo, un caso de prueba con x=0 para el código 1. SI (x=0) ENTONCES 2. A; 3. FINSI logra una cobertura de sentencias del 100% pero no cubre la rama de 1 a 3.",
                "Es correcto. Una cobertura de sentencias del 100% significa que cada sentencia ejecutable se ejecutó al menos una vez.",
                "No es correcto. El caso de prueba eliminado puede proporcionar cobertura de algunas sentencias que no están cubiertas por ninguno de los otros dos casos de prueba, en cuyo caso los dos casos de prueba restantes juntos no lograrán una cobertura de sentencias del 100%."
            ]
        },
        {
            questionText: "¿Por qué las pruebas de caja blanca facilitan la detección de defectos incluso cuando la especificación del software es vaga, obsoleta o incompleta?",
            options: [
                "Los casos de prueba se diseñan en función de la estructura del objeto de prueba en lugar de la especificación.",
                "Para cada técnica de prueba de caja blanca, la cobertura se puede definir bien y medir fácilmente.",
                "Las técnicas de prueba de caja blanca están muy bien diseñadas para detectar omisiones en los requisitos.",
                "Las técnicas de prueba de caja blanca se pueden utilizar tanto en pruebas estáticas como dinámicas."
            ],
            correctAnswerIndex: 0,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "Es correcto. Una fortaleza fundamental que comparten todas las técnicas de prueba de caja blanca es que toda la implementación del software se tiene en cuenta durante las pruebas, lo que facilita la detección de defectos incluso cuando la especificación del software es vaga, obsoleta o incompleta. Esto significa que las pruebas de caja blanca pueden encontrar defectos como una característica adicional agregada al código (ya sea accidental o deliberadamente) que no se supone que esté allí, lo que las pruebas de caja negra no pueden detectar.",
                "No es correcto. El hecho de que la cobertura se pueda definir con precisión no es la razón correcta. El nivel de cobertura alcanzado tendría mucho más impacto que la posibilidad de medir la cobertura.",
                "No es correcto. Si el software no implementa uno o más requisitos, es poco probable que las pruebas de caja blanca detecten los defectos de omisión resultantes.",
                "No es correcto. Si bien esto es cierto, no es la respuesta correcta, porque no hay conexión entre la capacidad de ser utilizado tanto en pruebas estáticas como dinámicas y la afirmación de que las pruebas de caja blanca facilitan la detección de defectos con especificaciones deficientes."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes NO es anticipado por el tester al aplicar la adivinación de errores?",
            options: [
                "El desarrollador entendió mal la fórmula en la historia de usuario para calcular el interés.",
                "El desarrollador escribió 'FA = A*(1+IR^N)' en lugar de 'FA = A*(1+IR)^N' en el código fuente.",
                "El desarrollador se perdió el seminario sobre la nueva legislación de tasas de interés compuesto.",
                "La precisión del interés calculado por el sistema no es lo suficientemente precisa."
            ],
            correctAnswerIndex: 2,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. Este es un ejemplo de anticipar el error del desarrollador.",
                "No es correcto. Este es un ejemplo de anticipar el defecto.",
                "Es correcto. Este es un ejemplo de una posible causa raíz de un defecto, que no es ni un error, ni un defecto ni un fallo, y es difícil de anticipar por el tester.",
                "No es correcto. Este es un ejemplo de anticipar un fallo, quizás basado en la experiencia de sistemas anteriores en este dominio de aplicación."
            ]
        },
        {
            questionText: "¿Cuál de las siguientes afirmaciones es cierta sobre las pruebas exploratorias?",
            options: [
                "Los casos de prueba se diseñan antes de que comience la sesión de pruebas exploratorias.",
                "El tester puede realizar la ejecución de la prueba, pero no puede realizar el diseño de la prueba.",
                "Los resultados de las pruebas exploratorias son buenos predictores del número de defectos restantes.",
                "Durante las pruebas exploratorias, el tester puede usar técnicas de prueba de caja negra."
            ],
            correctAnswerIndex: 3,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. En las pruebas exploratorias, los casos de prueba generalmente se crean durante la sesión de pruebas exploratorias, junto con el análisis, la implementación y la ejecución de las pruebas.",
                "No es correcto. En las pruebas exploratorias, las pruebas se diseñan, ejecutan y evalúan simultáneamente mientras el tester aprende sobre el objeto de prueba.",
                "No es correcto. Los resultados de las pruebas exploratorias dependen en gran medida de la experiencia del tester, por lo que incluso si los resultados de las pruebas exploratorias se pueden utilizar como predictor de riesgo y para evaluar si habrá menos o más defectos, por ejemplo, en comparación con la sesión de pruebas exploratorias anterior, no son un buen ejemplo de modelos fiables de predicción de defectos que puedan predecir el número de defectos restantes.",
                "Es correcto. Durante las pruebas exploratorias, los testers pueden usar cualquier técnica que consideren útil."
            ]
        },
        {
            questionText: "¿Qué práctica colaborativa de redacción de historias de usuario permite al equipo lograr una comprensión colectiva de lo que se necesita entregar?",
            options: [
                "Planning poker, para que un equipo pueda lograr un consenso sobre el esfuerzo necesario para implementar una historia de usuario.",
                "Revisiones, para que un equipo pueda detectar inconsistencias y contradicciones en una historia de usuario.",
                "Planificación de la iteración, para que las historias de usuario con el mayor valor de negocio para un cliente puedan priorizarse para su implementación.",
                "Conversación, para que los miembros del equipo puedan entender cómo se usará el software."
            ],
            correctAnswerIndex: 3,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "No es correcto. El planning poker puede estimar el esfuerzo para una historia de usuario que ya está escrita. No ayuda a entender lo que se debe entregar.",
                "No es correcto. Las revisiones no son una práctica colaborativa de redacción de historias de usuario.",
                "No es correcto. La planificación de la iteración es una práctica relacionada con el proyecto, utilizada para planificar el trabajo, no para entender lo que se necesita entregar.",
                "Es correcto. La conversación explica cómo se usará el software y a menudo permite al equipo definir criterios de aceptación significativos, obteniendo así una visión compartida de lo que se debe entregar."
            ]
        },
        {
            questionText: "Acaba de empezar a diseñar casos de prueba para la siguiente historia de usuario: 'Como cliente, quiero poder filtrar los resultados de búsqueda por rango de precios, para poder encontrar productos dentro de mi presupuesto más fácilmente'. Criterios de aceptación: 1. El filtro debe funcionar para todas las versiones de la aplicación desde la versión 3.0 en adelante. 2. El filtro debe permitir al cliente establecer un rango de precios con un mínimo y un máximo. 3. Los resultados de la búsqueda deben actualizarse dinámicamente a medida que el cliente ajusta el filtro de rango de precios. Precondición: solo hay dos productos disponibles, A y B. El producto A cuesta $100 y el producto B cuesta $110. ¿Cuál de los siguientes es el MEJOR ejemplo de un caso de prueba para esta historia de usuario?",
            options: [
                "Entrar a la página web y establecer el filtro para mostrar precios entre $90 y $100. Resultado esperado: los resultados muestran solo el producto A. Establecer el precio máximo en $110. Resultado esperado: los resultados ahora incluyen tanto el producto A como el B.",
                "Entrar a la página web. Resultado esperado: los precios mínimo y máximo predeterminados son $100 y $110 respectivamente. Agregar el producto C al stock, con un precio de $120. Actualizar la página web del cliente. Resultado esperado: el precio máximo predeterminado cambia a $120.",
                "Entrar a la página web y establecer el filtro para mostrar precios entre $90 y $115. Resultado esperado: los resultados muestran ambos productos A y B. Cambiar la moneda de USD a EUR. Resultado esperado: el rango del filtro cambia correctamente a valores en EUR, según el tipo de cambio actual.",
                "Entrar a la página web con tres navegadores diferentes: Edge, Chrome y Opera. En cada navegador, establecer el filtro entre $90 y $110. Resultado esperado: los resultados incluyen ambos productos A y B y el diseño de los resultados es el mismo en los tres navegadores."
            ],
            correctAnswerIndex: 0,
            chapter: "4. Técnicas de diseño de pruebas",
            rationales: [
                "Es correcto. Este caso de prueba está relacionado con los criterios de aceptación 2 y 3, porque verificamos si podemos establecer un rango de precios (criterio de aceptación 2) y si los resultados se actualizan dinámicamente después de ajustar el filtro de rango de precios (criterio de aceptación 3).",
                "No es correcto. Este caso de prueba no está relacionado con ninguno de los criterios de aceptación. Comprueba si el filtro establece dinámicamente el rango de precios mínimo y máximo predeterminado, y no que un cliente pueda hacerlo.",
                "No es correcto. Este caso de prueba no está relacionado con ninguno de los criterios de aceptación. Comprueba la función de cambio de moneda, que no se discute en esta historia de usuario.",
                "No es correcto. Este caso de prueba no está relacionado con ninguno de los criterios de aceptación. Comprueba la compatibilidad de la aplicación con diferentes navegadores, lo cual no se discute en esta historia de usuario."
            ]
        },
        {
            questionText: "¿Cuáles de las siguientes opciones definen MEJOR los criterios de SALIDA en un proyecto de prueba?",
            options: [
                "El presupuesto está aprobado y todos los analistas de pruebas están certificados.",
                "El presupuesto se agota y se logra al menos el 80% de cobertura de sentencias.",
                "La base de pruebas está disponible y el presupuesto se agota.",
                "Todos los analistas de pruebas están certificados y la base de pruebas está disponible."
            ],
            correctAnswerIndex: 1,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. La aprobación del presupuesto es un criterio de entrada.",
                "Es correcto. Quedarse sin presupuesto puede verse como un criterio de salida válido. La cobertura es una medida de minuciosidad, por lo que es un criterio de salida típico.",
                "No es correcto. La disponibilidad de la base de pruebas es un criterio de entrada.",
                "No es correcto. La certificación de los analistas es un criterio de entrada."
            ]
        },
        {
            questionText: "El equipo quiere estimar el tiempo necesario para que un tester ejecute cuatro casos de prueba para un componente de software. El equipo ha recopilado las siguientes medidas del esfuerzo utilizado para ejecutar un solo caso de prueba: Escenario de mejor caso: 1 hora, Escenario de peor caso: 8 horas, Escenario más probable: 3 horas. Dado que se utiliza la técnica de estimación de tres puntos, ¿cuál es la estimación final del tiempo necesario para ejecutar los cuatro casos de prueba?",
            options: [
                "14 horas",
                "3.5 horas",
                "16 horas",
                "12 horas"
            ],
            correctAnswerIndex: 0,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "Es correcto. Usando la técnica de estimación de tres puntos, la estimación final (E) se calcula como: E = (a + 4*m + b) / 6, donde a es la estimación más optimista, m es la estimación más probable y b es la estimación más pesimista. En este caso, la estimación para ejecutar un solo caso de prueba es: E = (1h + 4*3h + 8h) / 6 = 3.5 horas. Por lo tanto, el tiempo total necesario para que el tester ejecute 4 casos de prueba es: 3.5h * 4 = 14 horas.",
                "No es correcto.",
                "No es correcto.",
                "No es correcto."
            ]
        },
        {
            questionText: "La tabla muestra la matriz de trazabilidad de casos de prueba a requisitos. 'X' significa que un caso de prueba dado cubre el requisito correspondiente. Desea priorizar los casos de prueba siguiendo la técnica de priorización de cobertura adicional. Ejecuta los cuatro casos de prueba. ¿Qué caso de prueba debería ejecutarse en ÚLTIMO lugar?",
            options: [
                "TC1",
                "TC2",
                "TC3",
                "TC4"
            ],
            correctAnswerIndex: 1,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto.",
                "Es correcto. TC1 logra la mayor cobertura (4/7 – Req1, Req3, Req4 y Req7), por lo que debe ejecutarse primero. Req2, Req5 y Req6 aún no están cubiertos. El siguiente caso de prueba que logra la mayor cobertura adicional de los requisitos restantes es TC3, que cubre 2 de estos 3 requisitos (Req5 y Req6). Por lo tanto, TC3 debe ejecutarse en segundo lugar. Ahora, el único requisito que aún no está cubierto es Req2, que está cubierto por TC4. Por lo tanto, TC4 debe ejecutarse como el tercer caso de prueba. Así que, el último caso de prueba ejecutado será TC2.",
                "No es correcto.",
                "No es correcto."
            ]
        },
        {
            questionText: "¿Cómo pueden ser beneficiosos los cuadrantes de prueba para las pruebas?",
            options: [
                "Ayudan en la planificación de pruebas dividiendo el proceso de prueba en cuatro etapas, correspondientes a los cuatro niveles de prueba básicos: componente, integración, sistema y aceptación.",
                "Ayudan a evaluar la cobertura de alto nivel (p. ej., cobertura de requisitos) basándose en la cobertura de bajo nivel (p. ej., cobertura de código).",
                "Ayudan a las partes interesadas no técnicas a comprender los diferentes tipos de pruebas y que algunos tipos de pruebas son más relevantes para ciertos niveles de prueba que otros.",
                "Ayudan a los equipos ágiles a desarrollar una estrategia de comunicación basada en la clasificación de las personas según cuatro tipos psicológicos básicos y en modelar las relaciones entre ellos."
            ],
            correctAnswerIndex: 2,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. Los cuadrantes de prueba no tienen nada que ver con describir las relaciones entre los niveles de prueba.",
                "No es correcto. Los cuadrantes de prueba no pueden ayudar a evaluar ningún tipo de cobertura.",
                "Es correcto. Los cuadrantes de prueba permiten a los gerentes y otras partes interesadas comprender las relaciones entre los tipos de prueba, las actividades que apoyan (apoyo al equipo o crítica del producto) y el punto de vista en el que se centran (orientado al negocio o a la tecnología).",
                "No es correcto. Los cuadrantes de prueba no son un modelo psicológico."
            ]
        },
        {
            questionText: "Para un riesgo dado, su nivel de riesgo es de $1,000 y su probabilidad de riesgo se estima en un 50%. ¿Cuál es el impacto del riesgo?",
            options: [
                "$500",
                "$2,000",
                "$50,000",
                "$200"
            ],
            correctAnswerIndex: 1,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto.",
                "Es correcto. La evaluación de riesgos puede utilizar un enfoque cuantitativo o cualitativo, o una mezcla de ambos. En el enfoque cuantitativo, el nivel de riesgo se calcula como la multiplicación de la probabilidad del riesgo y el impacto del riesgo. Por lo tanto, Nivel de riesgo = Probabilidad de riesgo * Impacto del riesgo. Entonces, Impacto del riesgo = Nivel de riesgo / Probabilidad de riesgo. En nuestro caso, Impacto del riesgo = $1,000 / 50% = $1,000 / 0.5 = $2,000.",
                "No es correcto.",
                "No es correcto."
            ]
        },
        {
            questionText: "¿Cuáles de los siguientes son riesgos de producto?",
            options: [
                "Ampliación del alcance (Scope creep) y arquitectura deficiente.",
                "Arquitectura deficiente y tiempo de respuesta demasiado largo.",
                "Recorte de costos y mal soporte de herramientas.",
                "Ampliación del alcance y recorte de costos."
            ],
            correctAnswerIndex: 1,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. La ampliación del alcance es un ejemplo de un riesgo de proyecto.",
                "Es correcto. La arquitectura deficiente es un ejemplo de un riesgo de producto, ya que se refiere a una característica del producto. El tiempo de respuesta demasiado largo es un ejemplo de un riesgo de producto, ya que se refiere a una característica del producto.",
                "No es correcto. El recorte de costos y el mal soporte de herramientas son ejemplos de riesgos de proyecto.",
                "No es correcto. La ampliación del alcance y el recorte de costos son ejemplos de riesgos de proyecto."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes NO es un propósito válido para un informe de pruebas?",
            options: [
                "Seguir el progreso de las pruebas e identificar áreas que requieren más atención.",
                "Proporcionar información sobre las pruebas ejecutadas, sus resultados y cualquier problema o defecto encontrado.",
                "Proporcionar información sobre cada defecto, como los pasos para reproducirlo.",
                "Proporcionar información sobre las pruebas planificadas para el próximo período."
            ],
            correctAnswerIndex: 2,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. El seguimiento del progreso de las pruebas y la identificación de áreas que requieren más atención es un ejemplo de apoyo al control continuo de las pruebas. Este es uno de los propósitos de los informes de pruebas.",
                "No es correcto. Proporcionar información sobre las pruebas ejecutadas, sus resultados y cualquier problema o defecto encontrado es un ejemplo de resumir las actividades de prueba realizadas en un nivel de prueba determinado. Este es uno de los propósitos de los informes de pruebas.",
                "Es correcto. Proporcionar información sobre los defectos es el propósito de un informe de defectos, no de un informe de pruebas.",
                "No es correcto. Proporcionar información sobre las pruebas planificadas para el próximo período es uno de los propósitos de los informes de pruebas."
            ]
        },
        {
            questionText: "El usuario informó un fallo de software. Un ingeniero del equipo de soporte le pidió al usuario el número de versión del software donde se observó el fallo. Basándose en el número de versión, el equipo reensambló todos los archivos que componían la versión. Esto permitió más tarde a un desarrollador realizar un análisis, encontrar el defecto y corregirlo. ¿Cuál de las siguientes opciones permitió que el equipo realizara la actividad anterior?",
            options: [
                "Gestión de riesgos",
                "Monitorización y control de pruebas",
                "Enfoque de equipo completo",
                "Gestión de la configuración"
            ],
            correctAnswerIndex: 3,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "No es correcto. La gestión de riesgos consiste en el análisis de riesgos y el control de riesgos. Ninguna de estas actividades apoya el reensamblaje de los archivos que componían la versión, porque estas actividades se ocupan de los riesgos, no de los elementos de configuración.",
                "No es correcto. La monitorización de pruebas se ocupa de recopilar información sobre las pruebas. Esta información se utiliza para evaluar el progreso de las pruebas y para medir si se cumplen los criterios de salida de las pruebas o las tareas de prueba asociadas con los criterios de salida, como cumplir los objetivos de cobertura de riesgos de producto, requisitos u otros criterios de aceptación. El control de pruebas utiliza la información de la monitorización de pruebas para proporcionar, en forma de directivas de control, orientación y las acciones correctivas necesarias para lograr las pruebas más eficaces y eficientes. Ninguna de estas actividades se ocupa de la gestión de elementos de configuración.",
                "No es correcto. El enfoque de equipo completo se basa en la habilidad del tester para trabajar eficazmente en un contexto de equipo y para contribuir positivamente a los objetivos del equipo. Por lo tanto, se centra en cuestiones relacionadas con el equipo, no en los elementos de configuración.",
                "Es correcto. La gestión de la configuración proporciona una disciplina para identificar, controlar y rastrear los productos de trabajo. La gestión de la configuración mantiene un registro de los elementos de configuración modificados cuando se crea una nueva línea base. Usando la gestión de la configuración, es posible revertir a una línea base anterior para reproducir los resultados de pruebas anteriores."
            ]
        },
        {
            questionText: "Considere el siguiente informe de defectos para un Sistema de Préstamo de Libros. ¿Cuál de las siguientes opciones es MÁS probable que ayude al desarrollador a reproducir el fallo rápidamente? (ver informe en PDF)",
            options: [
                "Añadir información sobre qué usuarios y qué libros afecta el problema a la sección 'Descripción'.",
                "Rellenar el valor faltante para el campo 'Prioridad'.",
                "Añadir volcados de memoria e instantáneas de la base de datos tomadas después de cada paso descrito en la sección 'Pasos para Reproducir' a la sección 'Adjuntos'.",
                "Repetir el mismo caso de prueba para diferentes entornos y escribir informes de defectos para cada uno de ellos por separado."
            ],
            correctAnswerIndex: 0,
            chapter: "5. Gestión de Pruebas",
            rationales: [
                "Es correcto. Agregar esta información permite al desarrollador usar los mismos datos de entrada, por lo que es más probable que puedan reproducir el fallo rápidamente y así identificar el defecto más rápido.",
                "No es correcto. Agregar el valor de Prioridad no ayudará a reproducir el defecto en sí.",
                "No es correcto. Aunque parte de esta información puede ser valiosa, agregar los volcados de memoria y las instantáneas de la base de datos después de cada paso será demasiado, porque la mayoría de estos artefactos contendrán información inútil para el desarrollador y harán que el informe sea menos legible. También requerirá que el desarrollador dedique mucho tiempo a analizar esta información, lo que alargará el proceso de reparación.",
                "No es correcto. La pregunta trataba sobre ayudar al desarrollador a reproducir el defecto observado para una configuración de entorno específica."
            ]
        },
        {
            questionText: "Dadas las siguientes categorías de herramientas de prueba: i. Herramientas de colaboración, ii. Herramientas de DevOps, iii. Herramientas de gestión, iv. Herramientas de pruebas no funcionales, v. Herramientas de diseño e implementación de pruebas. ¿Herramientas de cuáles de las categorías son MÁS probables que faciliten la ejecución de pruebas?",
            options: [
                "i, v",
                "ii, iv",
                "i, iii, v",
                "ii, iii, iv"
            ],
            correctAnswerIndex: 1,
            chapter: "6. Herramientas de Soporte para Pruebas",
            rationales: [
                "No es correcto.",
                "Es correcto. Herramientas de DevOps (ii) apoyan el pipeline de entrega de DevOps, que incluye la facilitación de la ejecución de pruebas, como las pruebas de componentes para CI. Herramientas de pruebas no funcionales (iv) permiten al tester realizar pruebas no funcionales que son difíciles o imposibles de realizar manualmente, incluyendo la ejecución de pruebas.",
                "No es correcto.",
                "No es correcto."
            ]
        },
        {
            questionText: "¿Cuál de los siguientes es MÁS probable que sea un riesgo de la automatización de pruebas?",
            options: [
                "La detección de defectos adicionales de alta severidad.",
                "Proporcionar medidas que son demasiado complicadas para que los humanos las deriven.",
                "Incompatibilidad con la plataforma de desarrollo.",
                "Tiempos de ejecución de pruebas sustancialmente reducidos."
            ],
            correctAnswerIndex: 2,
            chapter: "6. Herramientas de Soporte para Pruebas",
            rationales: [
                "No es correcto. La detección de defectos adicionales de alta severidad sería un beneficio de la automatización de pruebas, en lugar de un riesgo.",
                "No es correcto. La provisión de medidas que son demasiado complicadas para que los humanos las deriven normalmente se consideraría un beneficio de la automatización de pruebas.",
                "Es correcto. Si la automatización de pruebas es incompatible con la plataforma de desarrollo, entonces no podrá integrarse con ella y, por ejemplo, pasar entradas de prueba al objeto de prueba y recibir los resultados de la prueba del objeto de prueba.",
                "No es correcto. Los tiempos de ejecución de pruebas sustancialmente reducidos normalmente se considerarían un beneficio proporcionado por la automatización de pruebas."
            ]
        }
      ]
    }
  ]
};

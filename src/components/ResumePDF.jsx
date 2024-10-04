// src/components/ResumePDF.jsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Estilos del PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
  },
});

const ResumePDF = ({ personalInfo, workExperiences, languages }) => (
  <Document>
    <Page style={styles.page}>
      {/* Información personal */}
      <View style={styles.section}>
        <Text style={styles.heading}>Personal Information</Text>
        <Text style={styles.text}>Email: {personalInfo.email}</Text>
        <Text style={styles.text}>Phone: {personalInfo.phone}</Text>
        {personalInfo.extraPhone && (
          <Text style={styles.text}>
            Extra Phone: {personalInfo.extraPhone}
          </Text>
        )}
        <Text style={styles.text}>Address: {personalInfo.address}</Text>
        {personalInfo.extraAddress && (
          <Text style={styles.text}>
            Extra Address: {personalInfo.extraAddress}
          </Text>
        )}
      </View>

      {/* Experiencia laboral */}
      <View style={styles.section}>
        <Text style={styles.heading}>Work Experience</Text>
        {workExperiences.map((exp, index) => (
          <View key={index}>
            <Text style={styles.text}>Company: {exp.company}</Text>
            <Text style={styles.text}>Duration: {exp.duration}</Text>
            <Text style={styles.text}>Description: {exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Lenguajes */}
      <View style={styles.section}>
        <Text style={styles.heading}>Languages</Text>
        {languages.map((lang, index) => (
          <Text key={index} style={styles.text}>
            {lang.language}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResumePDF;

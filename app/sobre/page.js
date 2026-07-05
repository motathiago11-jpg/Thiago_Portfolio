'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Camera, Search, Compass, Lightbulb, Briefcase, Mail, MessageCircle, MoveLeft, MoveRight, MoveUp } from 'lucide-react';
import styles from './sobre.module.css';

export default function Sobre() {
  return (
    <main className={styles.main}>
      {/* Header Navigation */}
      <nav className={styles.nav}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Voltar para Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.profileSection}>
        <div className={`container ${styles.heroGrid}`}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/images/AboutPhoto.jpg"
                alt="Thiago Henrique"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.heroTextWrapper}
          >
            <h1 className={styles.hugeTitle}>E ai, eu sou o Thiago!</h1>
            
            <p className={styles.text}>
              Publicitário formado pela UFS, trabalho com estratégia de conteúdo digital desde 2020. Meu lugar é na interseção entre análise e criação: leio o mercado, entendo o momento do cliente e transformo isso em direção criativa para a equipe de produção executar.
            </p>
            <p className={styles.text}>
              Já atuei com marcas de saúde, educação e construção civil. Em cada projeto, o ponto de partida é o mesmo: entender o contexto antes de definir o conteúdo. Acredito que uma boa estratégia é aquela que a criação consegue executar com clareza, e que o público reconhece sem precisar decifrar.
            </p>
            <p className={styles.text}>
              Gosto de ambientes colaborativos, de projetos que têm propósito de verdade e de comunicação que respeita a inteligência de quem está do outro lado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.infoSection}>
        <div className={`container ${styles.infoGrid}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Experiência</h2>
            
            <div className={styles.timelineRow}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <h3 className={styles.timelineTitle}>Oficina Propaganda EJ</h3>
                <div className={styles.timelineRole}>Social Media</div>
                <div className={styles.timelineDate}>Jan/2020 — Mar/2021</div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <h3 className={styles.timelineTitle}>Preventtiva</h3>
                <div className={styles.timelineRole}>Assistente de Marketing Digital</div>
                <div className={styles.timelineDate}>Set/2022 — Set/2023</div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <h3 className={styles.timelineTitle}>Freelancer</h3>
                <div className={styles.timelineRole}>Social Media Estrategista</div>
                <div className={styles.timelineDate}>Jan/2022 — Presente</div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <h3 className={styles.timelineTitle}>Trilha Propaganda</h3>
                <div className={styles.timelineRole}>Social Media</div>
                <div className={styles.timelineDate}>Dez/2024 — Out/2025</div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <h3 className={styles.timelineTitle}>Trilha Propaganda</h3>
                <div className={styles.timelineRole}>Estrategista de Conteúdo</div>
                <div className={styles.timelineDate}>Set/2025 — Presente</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>Formação</h2>
            
            <div className={styles.timelineRow}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <h3 className={styles.timelineTitle}>Publicidade e Propaganda</h3>
                <div className={styles.timelineRole}>UFS</div>
                <div className={styles.timelineDate}>2019 — 2023</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Methodology */}
      <section className={styles.methodologySection}>
        <div className={`container ${styles.methodologyContainer}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Como eu trabalho?</h2>
            
            <div className={styles.methodologyIntro}>
              <p className={styles.text}>
                Meu trabalho começa antes da pauta. Todo mês, antes de definir qualquer conteúdo, faço uma leitura do cenário: o que está acontecendo no mercado do cliente, o que o período pede, o que o público está buscando e sentindo. A partir dessa análise, defino o caminho estratégico do mês, o que deve ser destacado, o que precisa ser resolvido e quais formatos fazem sentido para aquele momento específico.
              </p>
              <p className={styles.text} style={{ marginTop: '1.5rem' }}>
                O resultado chega à equipe de criação em forma de documento de estratégia: orientações de pauta, diretrizes criativas, propostas de projetos especiais e calendário editorial. Meu papel é garantir que cada conteúdo tenha um porquê antes de ter uma forma.
              </p>
            </div>

            <div className={styles.bentoGrid}>
              <div className={styles.bentoCard}>
                <div className={styles.cardIcon}>
                  <Search size={28} />
                </div>
                <h3 className={styles.cardTitle}>Pesquisa de Mercado</h3>
                <p className={styles.cardText}>Análise do contexto do período, comportamento do consumidor e sazonalidade para embasar cada decisão de conteúdo.</p>
              </div>

              <div className={styles.bentoCard}>
                <div className={styles.cardIcon}>
                  <Compass size={28} />
                </div>
                <h3 className={styles.cardTitle}>Direcionamento Estratégico</h3>
                <p className={styles.cardText}>Definição do caminho do mês: o que comunicar, como comunicar e por quê, alinhado aos objetivos do cliente.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacts Pills */}
      <section id="contato" className={styles.contactSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>Vamos conversar?</h2>
            
            <div className={styles.contactPills}>
              <a href="https://www.linkedin.com/in/thiago-henrique-870272169/" target="_blank" rel="noopener noreferrer" className={styles.pill}>
                <Briefcase size={24} /> LinkedIn
              </a>
              <a href="mailto:motathiago11@gmail.com" className={styles.pill}>
                <Mail size={24} /> motathiago11@gmail.com
              </a>
              <a href="https://wa.me/5579991437315" target="_blank" rel="noopener noreferrer" className={styles.pill}>
                <MessageCircle size={24} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

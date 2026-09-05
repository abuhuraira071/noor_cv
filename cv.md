Department of Electrical and Electronic Engineering, Rajshahi University of Engineering & Technology (RUET) *rznoor07@gmail.com | +8801973837411 | Ramchandrapur, Rajshahi, Bangladesh | linkedin.com/in/rasheduzzaman-noor-*

Biomedical signal processing, deep learning for physiological signal classification (ECG/EEG), embedded and edge AI for

# MD RASHEDUZZAMAN NOOR

*2a4359226 | kaggle.com/rasheduzzamannoor*

## RESEARCH INTERESTS

## medical devices, real-time patient monitoring systems.

## EDUCATION

## B.Sc. in Electrical and Electronic Engineering

*Rajshahi University of Engineering & Technology (RUET), Rajshahi, Bangladesh* CGPA: 3.65/4.00 | Roll: 2001142 Award: Certificate of Leadership, Academic Year 2022

## Higher Secondary Certificate (HSC)

*MEH Arif College, Gazipur, Bangladesh* Result: 5.00/5.00

## Secondary School Certificate (SSC)

Result: 5.00/5.00

## PUBLICATIONS

Technology for Health (BECITHCON 2026). [add page numbers / DOI once available] •

- [ECG CWT / ResNet-34 / Grad-CAM manuscript] — in preparation
- [Planned EMBC conference paper — Bonn EEG seizure detection] — in preparation
## RESEARCH EXPERIENCE

## Undergraduate Capstone Project (EEE 4202 – Capstone Project Design II)

*RUET — Supervisor: Md. Nuhi-Alamin, Assistant Professor, Dept. of EEE* •

front-end.

inference latency within ~30 KB flash / ~6 KB RAM.

## ECG Arrhythmia Classification Research

*Independent research, RUET*

*March 2022 – Present*

*Nov 2018 – Mar 2020*

*Jan 2016 – Jan 2018*

*[Dates]*

*[Dates]*

baseline (572K params), under a strict record-disjoint protocol.

- Noor, M. R., et al. “CNN-SE-Transformer Based Lightweight and SHAP-Explainable Architecture for Five-Class Arrhythmia Classification.” 5th IEEE International Conference on Biomedical Engineering, Computer and Information [MSFT-Net journal manuscript — target: Biomedical Signal Processing and Control] — in preparation
Designed the “Artemis” multi-parameter patient monitor built around an STM32H743ZI Nucleo-144 board, integrating ECG (ADS1298), SpO2/HR, NIBP, GPS, and 4G LTE subsystems, with a full system wiring diagram.

- Developed a companion real-time arrhythmia detection system on an STM32 microcontroller with an AD8232 ECG
- Deployed an INT8-quantized beat classification model to an STM32 NUCLEO-F446RE board, achieving 20–100 ms/beat
- Developed inter-patient (DS1/DS2, de Chazal split) 5-class AAMI arrhythmia classifiers on MIT-BIH Arrhythmia, MIT-BIH NSR, and BIDMC-CHF datasets, comparing a CNN-BiLSTM-Attention hybrid against a proposed lightweight architecture, MSFT-Net (Multi-Scale + Squeeze-Excitation + FiLM-conditioned + temporal pooling).
- Achieved 89.45% accuracy / 0.8725 macro-F1 with MSFT-Net (167K params) vs. 82.00% / 0.7326 for the hybrid
- Engineered a 54-feature auxiliary morphology set (fiducial, P/T-wave, beat-to-beat morphology diff) targeting minority-class (Supraventricular, Fusion) detection; ran staged, validation-gated ablation experiments (threshold calibration, hard-negative mining, auxiliary loss heads) to improve Fusion-beat recall.

- Deployed quantized models to both STM32 (NUCLEO-F446RE) and ESP32 platforms, validating cross-platform edge inference feasibility; separately quantized a microcontroller-targeted model to 11,685 parameters (29.9 KB).
- Published this work as “CNN-SE-Transformer Based Lightweight and SHAP-Explainable Architecture for Five-Class Arrhythmia Classification” (BECITHCON 2026); drafting an extended journal manuscript (target: Biomedical Signal Processing and Control).
**MSCT-SEGFNet: ECG Classification with Diffusion-Based Class Balancing** *[Dates, ongoing]* *Independent research, RUET*

- Designing a record-wise-split MIT-BIH 5-class arrhythmia classifier (Multi-Scale CNN + SE + Transformer branch + Gated Fusion + Attention Pooling), keeping BIDMC-CHF as a separate characterization task rather than a merged label.
- Implementing a class-conditioned 1D diffusion model to synthesize minority-class ECG beats for balancing, replacing SMOTE-based approaches, with discriminator-based quality control (real-vs-synthetic AUC checks).
- Planned full ablation suite (component-wise, augmentation-wise) with Macro-F1, MCC, balanced accuracy, per-class sensitivity/specificity, ROC/PR-AUC.
**EEG-Based Seizure Detection** *[Dates]*

- Built a full preprocessing and classification pipeline on the CHB-MIT Scalp EEG Database (bandpass/notch filtering, Common Average Reference, windowed segmentation) under Kaggle compute constraints, with memory/disk optimization (float16 conversion, immediate intermediate-file cleanup).
- Built a separate Kaggle notebook and lab report for seizure detection on the Bonn University EEG dataset, covering feature extraction and Random Forest classification, with conference paper planning targeting IEEE EMBC.
**EEG-Based ADHD Classification** *[Dates]*

- Built a subject-wise EEG classification pipeline using CatBoost and a custom MLP ensemble, with StratifiedGroupKFold cross-validation to prevent subject-level leakage.
**ECG Classification with CWT Scalograms** *[Dates]*

- Contributed to a manuscript on ECG arrhythmia classification using Continuous Wavelet Transform scalograms, ResNet-34, Optuna hyperparameter optimization, and Grad-CAM explainability.
## TECHNICAL SKILLS

- Languages / Frameworks: Python, TensorFlow/Keras, embedded C (STM32 HAL)
- ML/DL: CNNs, Transformers, BiLSTM, attention/gated fusion architectures, diffusion models, SMOTE/data augmentation, model quantization (INT8/TFLite Micro), SHAP explainability
- Signal Processing: ECG/EEG preprocessing, CWT scalograms, RR-interval and morphological feature extraction
- Hardware: STM32H743ZI, STM32 NUCLEO-F446RE, ESP32, ADS1298, AD8232, GPS/4G LTE integration
- Tools: Kaggle/Colab GPU environments, Grad-CAM/Integrated Gradients for explainability, MS Word/Excel/PowerPoint
- Languages: Bangla (native), English (fluent), Hindi (fluent, spoken)
## LEADERSHIP & SERVICE

- Certificate of Leadership, RUET — Academic Year 2022
## OTHER OUTPUTS

- Designed an A0 academic poster (built programmatically via PptxGenJS) for the real-time arrhythmia detection system.
- Active Kaggle contributor (kaggle.com/rasheduzzamannoor).
- Photography contributor at Shutterstock (shutterstock.com/g/RZ+Noor).
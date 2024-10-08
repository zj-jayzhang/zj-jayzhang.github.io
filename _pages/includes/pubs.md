
# 📝 Selected Publications 
(<sup>*</sup> indicates equal contribution;  <sup>#</sup> indicates corresponding authorship. See full list of publications <a href="https://scholar.google.com/citations?user=soDBSE8AAAAJ">here</a>. ) 

<!-- <div style="background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; padding: 10px;">
Your highlighted text goes here.
</div> -->

<style>
.box {
  display: inline-block;
  background-color: lightgray;
}

.blue-text {
  color: blue;
}
</style>


<blockquote style="font-size: 1em; color: blue; background-color: #f0f8ff; padding: 10px;">
Preprint.
</blockquote>
<!-- Preprint -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">preprint</div><img src='images/position.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Membership Inference Attacks Cannot Prove that a Model Was Trained On Your Data
](https://arxiv.org/abs/2409.19798) \\
<b>Jie Zhang</b>, Debeshee Das,  Gautam Kamath, Florian Tramèr. 

- We argue that MIA is fundamentally flawed for proving training data use. To provide convincing evidence, the data creator must show the attack has a low false positive rate, meaning its output is unlikely under the null hypothesis (i.e., the model wasn't trained on the target data). However, it's impossible to sample from this null hypothesis because we don't know the exact training set and can't efficiently retrain large models. We propose two solutions: using data extraction attacks or membership inference on specially crafted canary data for reliable training data proofs.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">preprint</div><img src='images/blind_mia.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Blind Baselines Beat Membership Inference Attacks for Foundation Models
](https://arxiv.org/abs/2406.16201) \\
Debeshee Das, <b>Jie Zhang</b>, Florian Tramèr. \[[code](https://github.com/ethz-spylab/Blind-MIA)\]

- Unfortunately, we find that **evaluations of MI attacks for foundation models are flawed**, because
they sample members and non-members from different distributions. For 8 published MI evaluation
datasets, we show that blind attacks—that distinguish the member and non-member distributions
without looking at any trained model—outperform state-of-the-art MI attacks. Existing evaluations
thus tell us nothing about membership leakage of a foundation model’s training data.

</div>
</div>



<!-- Accepted -->


<blockquote style="font-size: 1em; color: blue; background-color: #f0f8ff; padding: 10px;">
Accepted.
</blockquote>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/agentdojo.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AgentDojo: A Dynamic Environment to Evaluate Attacks and Defenses for LLM Agents
](https://arxiv.org/abs/2406.13352) \\
Edoardo Debenedetti, **Jie Zhang**, Mislav Balunović, Luca Beurer-Kellner, Marc Fischer, Florian Tramèr. \[[code](https://github.com/ethz-spylab/agentdojo)\]

- To measure the adversarial robustness of AI agents, we introduce **AgentDojo**, an evaluation framework for agents that execute tools over untrusted data. AgentDojo is an extensible environment for designing and evaluating new agent tasks, defenses, and adaptive attacks. We populate the environment with 97 realistic tasks, 629 security test cases, and various attack and defense paradigms from the literature. AgentDojo poses a challenge for both attacks and defenses: state-of-the-art LLMs fail at many tasks (even in the absence of attacks), and existing prompt injection attacks break some security properties but not all.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='images/mis.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Evaluations of Machine Learning Privacy Defenses are Misleading](https://arxiv.org/abs/2404.17399) \\
Michael Aerni<sup>*</sup>, <b>Jie Zhang</b><sup>*</sup>, Florian Tramèr.  \[[code](https://github.com/ethz-spylab/misleading-privacy-evals)\] \[[blogpost](https://spylab.ai/blog/misleading-privacy-evals/)\]


- Empirical defenses for private machine learning forgo the provable guarantees of differential privacy in the hope of achieving high utility on real-world data. We find that evaluations of such methods can be highly <b>misleading</b>. In this work, we thus propose a new evaluation protocol that is reliable and efficient.

</div>
</div>

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024</div><img src='images/iclr24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Real-Fake: Effective Training Data Synthesis Through Distribution Matching](https://arxiv.org/abs/2310.10402) \\
Jianhao Yuan, <b>Jie Zhang</b>, Shuyang Sun, Philip Torr, Bo Zhao<sup>#</sup>. (ICLR 2024) \[[code](https://github.com/BAAI-DCAI/Training-Data-Synthesis)\]


- In this paper, through extensive experiments, we demonstrate the effectiveness of our synthetic data across diverse image classification tasks, both as a replacement for and augmentation to real datasets. Specifically, we achieve 70.9% top1 classification accuracy on ImageNet1K when training solely with synthetic data equivalent to 1 X the original real data size, which increases to 76.0% when scaling up to 10 X synthetic data.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2022</div><img src='images/nips2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DENSE: Data-Free One-Shot Federated Learning](https://arxiv.org/abs/2112.12371) \\
<b>Jie Zhang<sup>*</sup></b>, Chen Chen<sup>*</sup>, Bo Li, Lingjuan Lyu, Shuang Wu, Shouhong Ding, Chunhua Shen, Chao Wu<sup>#</sup>. (NeurIPS 2022) \[[code](https://github.com/zj-jayzhang/DENSE )\]
- The paper focuses on one-shot federated learning, i.e., the server can learn a model with a single communication round. The proposed FedSyn method has two stages: first, training a generator from the ensemble of models from clients; second, distilling the knowledge of the ensemble into a global model with synthetic data. We validate the efficacy of FedSyn by conducting extensive experiments on 6 different datasets with various non-IID settings generated from Dirichlet distributions.
</div>
</div>  -->

<!-- Skip -->
<!-- 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2023, highlight</div><img src='images/cvpr23.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">
[Accelerating Dataset Distillation via Model Augmentation](https://arxiv.org/abs/2212.06152) \\
  Lei Zhang<sup>*</sup>, <b>Jie Zhang</b><sup>*</sup>, Bowen Lei, Subhabrata Mukherjee, Xiang Pan, Bo Zhao, Caiwen Ding, Yao Li, Dongkuan Xu<sup>#</sup>. 
  (CVPR 2023) \[[code](https://github.com/zj-jayzhang/Acc-DD/ )\]

- In this paper, we assume that training the synthetic data with diverse models leads to better generalization performance. Thus we propose two model augmentation techniques, i.e., using early-stage models and weight perturbation to learn an informative synthetic set with significantly reduced training cost. Extensive experiments demonstrate that our method achieves up to 20× speedup and comparable performance on par with state-of-the-art baseline methods.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2022</div><img src='images/cvpr22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Efficient Data-Free Black-box Adversarial Attack](https://openaccess.thecvf.com/content/CVPR2022/html/Zhang_Towards_Efficient_Data_Free_Black-Box_Adversarial_Attack_CVPR_2022_paper.html) \\
<b>Jie Zhang<sup>*</sup></b>, Bo Li<sup>*</sup>, Jianghe Xu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (CVPR 2022)
\[[code](https://github.com/zj-jayzhang/Data-Free-Transfer-Attack )\]

- In this paper, by rethinking the collaborative relationship between the generator and the substitute model, we design a novel black-box attack framework. The proposed method can efficiently imitate the target model through a small number of queries and achieve high attack success rate.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/icml22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Federated Learning with Label Distribution Skew via Logits Calibration](https://proceedings.mlr.press/v162/zhang22p.html) \\
<b>Jie Zhang</b>, Zhiqi Li, Bo Li, Jianghe Xu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (ICML 2022) 

- In this work, we investigate the label distribution skew from a statistical view. We demonstrate both theoretically and empirically that previous methods based on softmax crossentropy are not suitable, which can result in local models heavily overfitting to minority classes and missing classes. Then, we propose FedLC (Federated learning via Logits Calibration), which calibrates the logits before softmax cross-entropy according to the probability of occurrence of each class.

</div>
</div>









<details>
<summary style="font-size: 1.2em; color: blue; background-color: #f0f8ff;"> More </summary>
  <ul>
    <li><span style="color: blue; background-color: lightgray; "> ECCV 2024 </span>&nbsp;<a href="https://arxiv.org/abs/2403.05016">DiffClass: Diffusion-Based Class Incremental Learning</a>, Zichong Meng, <strong>Jie Zhang</strong>, Changdi Yang, Zheng Zhan, Pu Zhao, Yanzhi Wang.  </li>
    <li><span style="color: blue; background-color: lightgray; "> ICCV 2023 </span>&nbsp;<a href="https://arxiv.org/abs/2303.06937">TARGET: Federated Class-Continual Learning via Exemplar-Free Distillation</a>, <strong>Jie Zhang</strong>, Chen Chen, Weiming Zhuang, Lingjuan Lyu. <a href="https://github.com/zj-jayzhang/Federated-Class-Continual-Learning">code</a> </li>
    <li><span style="color: blue; background-color: lightgray; "> ICLR 2023 </span>&nbsp;<a href="https://openreview.net/pdf?id=ConT6H7MWL">IDEAL: Query-Efficient Data-Free Learning from Black-Box Models</a>, <strong>Jie Zhang<sup>*</sup></strong>, Chen Chen<sup>*</sup>, Lingjuan Lyu. <a href="https://github.com/SonyResearch/IDEAL">code</a> </li>
    <li><span style="color: blue; background-color: lightgray; "> AAAI 2023 </span>&nbsp;<a href="https://arxiv.org/abs/2302.09479">Delving into Adversarial Robustness of Federated Learning</a>, <b>Jie Zhang<sup>*</sup></b>, Bo Li<sup>*</sup>, Chen Chen, Lingjuan Lyu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (<font color="red">Oral</font>)! </li>
    <li><span style="color: blue; background-color: lightgray; "> ICCV 2023 </span>&nbsp;<a href="https://arxiv.org/abs/2307.12463">Rethinking Data Distillation: Do Not Overlook Calibration</a>, D. Zhu, B. Lei, <strong>Jie Zhang</strong>, Y. Fang, Y. Xie, R. Zhang, D. Xu. </li>
    <li><span style="color: blue; background-color: lightgray; "> Best Student Paper Award, AAAI 2022 FL workshop </span>&nbsp;<a href="https://federated-learning.org/fl-aaai-2022/Papers/FL-AAAI-22_paper_34.pdf">GEAR: A Margin-based Federated Adversarial Training Approach</a>, Chen Chen<sup>*</sup>, <strong>Jie Zhang<sup>*</sup></strong>, Lingjuan Lyu.</li>
  </ul>

</details>
-->
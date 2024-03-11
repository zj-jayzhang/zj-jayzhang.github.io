
# 📝 Selected Publications 


<style>
.box {
  display: inline-block;
  background-color: lightgray;
}

.blue-text {
  color: blue;
}
</style>

(<sup>*</sup> indicates equal contribution;  <sup>#</sup> indicates corresponding authorship.) 


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2022</div><img src='images/cvpr22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Efficient Data-Free Black-box Adversarial Attack](https://openaccess.thecvf.com/content/CVPR2022/html/Zhang_Towards_Efficient_Data_Free_Black-Box_Adversarial_Attack_CVPR_2022_paper.html) \\
<b>Jie Zhang<sup>*</sup></b>, Bo Li<sup>*</sup>, Jianghe Xu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (CVPR 2022) <a href="https://github.com/zj-jayzhang/Data-Free-Transfer-Attack">code</a> 

- In this paper, by rethinking the collaborative relationship between the generator and the substitute model, we design a novel black-box attack framework. The proposed method can efficiently imitate the target model through a small number of queries and achieve high attack success rate.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/icml22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Federated Learning with Label Distribution Skew via Logits Calibration](https://proceedings.mlr.press/v162/zhang22p.html) \\
<b>Jie Zhang</b>, Zhiqi Li, Bo Li, Jianghe Xu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (ICML 2022) 

- In this work, we investigate the label distribution skew from a statistical view. We demonstrate both theoretically and empirically that previous methods based on softmax crossentropy are not suitable, which can result in local models heavily overfitting to minority classes and missing classes. Then, we propose FedLC (Federated learning via Logits
Calibration), which calibrates the logits before softmax cross-entropy according to the probability of occurrence of each class.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2023, highlight</div><img src='images/cvpr23.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Accelerating Dataset Distillation via Model Augmentation](https://arxiv.org/abs/2212.06152) \\
  Lei Zhang<sup>*</sup>, <b>Jie Zhang</b><sup>*</sup>, Bowen Lei, Subhabrata Mukherjee, Xiang Pan, Bo Zhao, Caiwen Ding, Yao Li, Dongkuan Xu.
  (CVPR 2023) <a href="https://github.com/zj-jayzhang/Acc-DD/">code</a> 

- In this paper, we assume that training the synthetic data with diverse models leads to better generalization performance. Thus we propose two model augmentation techniques, i.e., using early-stage models and weight perturbation to learn an informative synthetic set with significantly reduced training cost. Extensive experiments demonstrate that our method achieves up to 20× speedup and comparable performance on par with state-of-the-art baseline methods.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2022</div><img src='images/nips2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DENSE: Data-Free One-Shot Federated Learning](https://arxiv.org/abs/2112.12371) \\
<b>Jie Zhang<sup>*</sup></b>, Chen Chen<sup>*</sup>, Bo Li, Lingjuan Lyu, Shuang Wu, Shouhong Ding, Chunhua Shen, Chao Wu<sup>#</sup>. (NeurIPS 2022) <a href="https://github.com/zj-jayzhang/DENSE">code</a> 

- The paper focuses on one-shot federated learning, i.e., the server can learn a model with a single communication round. The proposed FedSyn method has two stages: first, training a generator from the ensemble of models from clients; second, distilling the knowledge of the ensemble into a global model with synthetic data. We validate the efficacy of FedSyn by conducting extensive experiments on 6 different datasets with various non-IID settings generated from Dirichlet distributions. Results can well support that the proposed method consistently outperforms all the baselines.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023, oral</div><img src='images/aaai2023.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Delving into Adversarial Robustness of Federated Learning](https://arxiv.org/abs/2302.09479) \\
<b>Jie Zhang<sup>*</sup></b>, Bo Li<sup>*</sup>, Chen Chen, Lingjuan Lyu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (AAAI 2023)

- To facilitate a better understanding of the adversarial vulnerability of the existing FL methods, we conduct comprehensive robustness evaluations on various attacks and adversarial training methods. Moreover, we reveal the negative impacts induced by directly adopting adversarial training in FL, which seriously hurts the test accuracy, especially in non-IID settings. In this work, we propose a novel algorithm called Decision Boundary based Federated Adversarial Training (DBFAT), which consists of two components (local re-weighting and global regularization) to improve both accuracy and robustness of FL systems.
</div>
</div>

- <span style="color: blue; background-color: lightgray; "> ICCV 2023 </span>&nbsp;[Rethinking Data Distillation: Do Not Overlook Calibration](https://arxiv.org/abs/2307.12463), D. Zhu, B. Lei, **Jie Zhang**, Y. Fang, Y. Xie, R. Zhang, D. Xu. 
- <span style="color: blue; background-color: lightgray; "> ICCV 2023 </span>&nbsp;[TARGET: Federated Class-Continual Learning via Exemplar-Free Distillation](https://arxiv.org/abs/2303.06937), **Jie Zhang**, Chen Chen, Weiming Zhuang, Lingjuan Lv. 
- <span style="color: blue; background-color: lightgray; "> ICLR 2023 </span>&nbsp;[IDEAL: Query-Efficient Data-Free Learning from Black-Box Models](https://openreview.net/pdf?id=ConT6H7MWL), **Jie Zhang<sup>*</sup>**, Chen Chen<sup>*</sup>, Lingjuan Lyu. <a href="https://github.com/SonyResearch/IDEAL">code</a> 
- <span style="color: blue; background-color: lightgray; "> Best Student Paper Award, AAAI 2022 FL workshop </span>&nbsp;[GEAR: A Margin-based Federated Adversarial Training Approach](https://federated-learning.org/fl-aaai-2022/Papers/FL-AAAI-22_paper_34.pdf), Chen Chen<sup>*</sup>, **Jie Zhang**<sup>*</sup>, Lingjuan Lyu. 


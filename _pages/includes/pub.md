
# 📝 Publications 
(<sup>*</sup> indicates equal contribution;  <sup>#</sup> indicates corresponding authorship.) 



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='images/aaai2023.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Delving into Adversarial Robustness of Federated Learning]() \\
<b>Jie Zhang</b>, Bo Li, Chen Chen, Lingjuan Lyu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (AAAI 2023) <a href="https://github.com/zj-jayzhang/">code</a> 

- To facilitate a better understanding of the adversarial vulnerability of the existing FL methods, we conduct comprehensive robustness evaluations on various attacks and adversarial training methods. Moreover, we reveal the negative impacts induced by directly adopting adversarial training in FL, which seriously hurts the test accuracy, especially in non-IID settings. In this work, we propose a novel algorithm called Decision Boundary based Federated Adversarial Training (DBFAT), which consists of two components (local re-weighting and global regularization) to improve both accuracy and robustness of FL systems.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2022</div><img src='images/nips2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DENSE: Data-Free One-Shot Federated Learning](https://arxiv.org/abs/2112.12371) \\
<b>Jie Zhang</b>, Chen Chen, Bo Li, Lingjuan Lyu, Shuang Wu, Shouhong Ding, Chunhua Shen, Chao Wu<sup>#</sup>. (NeurIPS 2022) <a href="[https://github.com/zj-jayzhang/](https://github.com/zj-jayzhang/DENSE)">code</a> 

- The paper focuses on one-shot federated learning, i.e., the server can learn a model with a single communication round. The proposed FedSyn method has two stages: first, training a generator from the ensemble of models from clients; second, distilling the knowledge of the ensemble into a global model with synthetic data. We validate the efficacy of FedSyn by conducting extensive experiments on 6 different datasets with various non-IID settings generated from Dirichlet distributions. Results can well support that the proposed method consistently outperforms all the baselines.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2022</div><img src='images/cvpr22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Efficient Data-Free Black-box Adversarial Attack](https://openaccess.thecvf.com/content/CVPR2022/html/Zhang_Towards_Efficient_Data_Free_Black-Box_Adversarial_Attack_CVPR_2022_paper.html) \\
<b>Jie Zhang</b>, Bo Li, Jianghe Xu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (CVPR 2022) <a href="https://github.com/zj-jayzhang/Data-Free-Transfer-Attack">code</a> 

- In this paper, by rethinking the collaborative relationship between the generator and the substitute model, we design a novel black-box attack framework. The proposed method can efficiently imitate the target model through a small number of queries and achieve high attack success rate.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/icml22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Federated Learning with Label Distribution Skew via Logits Calibration](https://proceedings.mlr.press/v162/zhang22p.html) \\
<b>Jie Zhang</b>, Zhiqi Li, Bo Li, Jianghe Xu, Shuang Wu, Shouhong Ding, Chao Wu<sup>#</sup>. (ICML 2022) <a href="https://proceedings.mlr.press/v162/zhang22p.html">code</a>

- In this work, we investigate the label distribution skew from a statistical view. We
demonstrate both theoretically and empirically that previous methods based on softmax crossentropy are not suitable, which can result in local models heavily overfitting to minority classes and missing classes. Then, we propose FedLC (Federated learning via Logits
Calibration), which calibrates the logits before softmax cross-entropy according to the probability of occurrence of each class.

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICIP 2022</div><img src='images/icip22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Adversarial Examples for Good: Adversarial Examples Guided Imbalanced Learning](https://arxiv.org/abs/2201.12356) \\
**Jie Zhang**, Lei Zhang, Gang Li, Chao Wu<sup>#</sup>. (ICIP 2022) <a href="https://github.com/zj-jayzhang/Guided_Adversarial_Examples">code</a> 

- In this paper, we demonstrate that adversarial examples can also be utilized for good to improve the performance of imbalanced learning. We provide a new perspective on how to deal with imbalanced data: adjust the biased decision boundary by training with Guiding Adversarial Examples (GAEs). We empirically show, on several benchmark datasets, our proposed method is comparable to the state-of-the-art method. To our best knowledge, we are the first to deal with imbalanced learning with adversarial examples.
</div>
</div>


- [GEAR: A Margin-based Federated Adversarial Training Approach](https://federated-learning.org/fl-aaai-2022/Papers/FL-AAAI-22_paper_34.pdf), Chen Chen, **Jie Zhang**<sup>*</sup>, Lingjuan Lyu. (Best Student Paper Award, AAAI 2022 FL workshop)
- [Federated Mutual Learning](https://arxiv.org/abs/2006.16765), Tao Shen, **Jie Zhang**, Xinkang Jia, Fengda Zhang, Gang Huang, Pan Zhou, Kun Kuang, Fei Wu, Chao Wu.
- [QEKD: Query-Efficient and Data-Free Knowledge Distillation from Black-box Models](https://arxiv.org/abs/2205.11158), **Jie Zhang**, Chen Chen, Jiahua Dong, Ruoxi Jia, Lingjuan Lyu.
<!-- - [A Practical Data-Free Approach to One-shot Federated Learning with Heterogeneity](https://arxiv.org/abs/2112.12371), **Jie Zhang**, Chen Chen, Bo Li, Lingjuan Lyu, Shuang Wu, Jianghe Xu, Shouhong Ding, Chao Wu. -->

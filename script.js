// Gallery data with all cases and their information
const galleryData = [
    {
        id: 1,
        title: "插画变手办",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1958539464994959715",
        category: "style",
        //inputImages: ["images/case1/input.jpg", "images/case1/input0.jpg"],
        //outputImages: ["images/case1/output.jpg", "images/case1/output0.jpg"],
        inputImages: [ "images/case1/input0.jpg"],
        outputImages: ["images/case1/output0.jpg"],
        prompt: `将这张照片变成角色手办。在它后面放置一个印有角色图像的盒子，盒子上有一台电脑显示Blender建模过程。在盒子前面添加一个圆形塑料底座，角色手办站在上面。如果可能的话，将场景设置在室内`,
        description: "需上传一张参考图片作为生成手办的对象"
    },
    {
        id: 2,
        title: "根据地图箭头生成地面视角图片",
        creator: "@tokumin",
        creatorUrl: "https://x.com/tokumin/status/1960583251460022626",
        category: "creative",
        //inputImages: ["images/case2/input.jpg", "images/case2/input2.jpg", "images/case2/input3.jpg"],
        //outputImages: ["images/case2/output.jpg", "images/case2/output2.jpg", "images/case2/output3.jpg"],
        inputImages: ["images/case2/input.jpg"],
        outputImages: ["images/case2/output.jpg"],
        prompt: `画出红色箭头看到的内容
从红色圆圈沿箭头方向画出真实世界的视角`,
        description: "需要上传一张包含红色箭头的google maps图像"
    },
    {
        id: 3,
        title: "真实世界的AR信息化",
        creator: "@bilawalsidhu",
        creatorUrl: "https://x.com/bilawalsidhu/status/1960529167742853378",
        category: "creative",
        inputImages: [],
        outputImages: ["images/case3/output.jpg"],
        prompt: `你是一个基于位置的AR体验生成器。在这张图像中突出显示[兴趣点]并标注相关信息`,
        description: "需上传一张参考图像，需要在提示词中 [POI] 输入需要标注的兴趣点"
    },
    {
        id: 4,
        title: "分离出3D建筑/制作等距模型",
        creator: "@Zieeett",
        creatorUrl: "https://x.com/Zieeett/status/1960420874806247762",
        category: "creative",
        inputImages: ["images/case4/input.jpg", "images/case4/input2.jpg"],
        outputImages: ["images/case4/output.jpg", "images/case4/output2.jpg"],
        prompt: `将图像制作成白天和等距视图[仅限建筑]`,
        description: "需上传一张包含对应物体的图像，根据需要修改 [方括号] 内的信息"
    },
    {
        id: 5,
        title: "不同时代自己的照片",
        creator: "@AmirMushich",
        creatorUrl: "https://x.com/AmirMushich/status/1960810850224091439",
        category: "style",
        inputImages: ["images/case5/input.jpg"],
        outputImages: ["images/case5/output.jpg"],
        prompt: `将角色的风格改为[1970]年代的经典[男性]风格

添加[长卷发]，
[长胡子]，
将背景改为标志性的[加州夏季风景]

不要改变角色的面部`,
        description: "需上传一张人物的照片，将 [方括号] 中的文字改为你的时代和细节信息"
    },
    {
        id: 6,
        title: "多参考图像生成",
        creator: "@MrDavids1",
        creatorUrl: "https://x.com/MrDavids1/status/1960783672665128970",
        category: "creative",
        inputImages: ["images/case6/input.jpg"],
        outputImages: ["images/case6/output.jpg"],
        prompt: `一个模特摆姿势靠在粉色宝马车上。她穿着以下物品，场景背景是浅灰色。绿色外星人是一个钥匙扣，挂在粉色手提包上。模特肩上还有一只粉色鹦鹉。旁边坐着一只戴着粉色项圈和金色耳机的哈巴狗`,
        description: "需上传多个参考图，提示词需要详细描述和包含多个参考对象"
    },
    {
        id: 7,
        title: "自动修图",
        creator: "@op7418",
        creatorUrl: "https://x.com/op7418/status/1960528616573558864",
        category: "editing",
        inputImages: ["images/case7/input.jpg"],
        outputImages: ["images/case7/output.jpg"],
        prompt: `这张照片很无聊很平淡。增强它！增加对比度，提升色彩，改善光线使其更丰富，你可以裁剪和删除影响构图的细节`,
        description: "需上传一张需要进行修正的图像"
    },
    {
        id: 8,
        title: "手绘图控制多角色姿态",
        creator: "@op7418",
        creatorUrl: "https://x.com/op7418/status/1960536717242573181",
        category: "character",
        inputImages: ["images/case8/input.jpg"],
        outputImages: ["images/case8/output.jpg"],
        prompt: `让这两个角色使用图3的姿势进行战斗。添加适当的视觉背景和场景互动，生成图像比例为16:9`,
        description: "需上传角色的图像以及手绘草图"
    },
    {
        id: 9,
        title: "跨视角图像生成",
        creator: "@op7418",
        creatorUrl: "https://x.com/op7418/status/1960896630586310656",
        category: "creative",
        inputImages: ["images/case9/input.jpg"],
        outputImages: ["images/case9/output.jpg"],
        prompt: `将照片转换为俯视角度并标记摄影师的位置`,
        description: "需上传一张地面上拍摄的照片"
    },
    {
        id: 10,
        title: "定制人物贴纸",
        creator: "@op7418",
        creatorUrl: "https://x.com/op7418/status/1960385812132192509",
        category: "character",
        inputImages: ["images/case10/input.jpg"],
        outputImages: ["images/case10/output.jpg"],
        prompt: `帮我将角色变成类似图2的白色轮廓贴纸。角色需要转换成网页插画风格，并添加一个描述图1的俏皮白色轮廓短语`,
        description: "需上传一张贴纸参考图以及一张人物图像"
    },
    {
        id: 11,
        title: "动漫转真人Coser",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1960946893971706306",
        category: "style",
        inputImages: ["images/case11/input.jpg"],
        outputImages: ["images/case11/output.jpg"],
        prompt: `生成一个女孩cosplay这张插画的照片，背景设置在Comiket`,
        description: "需上传一张插画图像"
    },
    {
        id: 12,
        title: "生成角色设定",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1960669234276753542",
        category: "character",
        inputImages: ["images/case12/input.jpg"],
        outputImages: ["images/case12/output.jpg"],
        prompt: `为我生成人物的角色设定（Character Design）

比例设定（不同身高对比、头身比等）

三视图（正面、侧面、背面）

表情设定（Expression Sheet） → 就是你发的那种图

动作设定（Pose Sheet） → 各种常见姿势

服装设定（Costume Design）`,
        description: "需上传一张角色参考图像"
    },
    {
        id: 13,
        title: "色卡线稿上色",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1960652077891510752",
        category: "editing",
        inputImages: ["images/case13/input.jpg"],
        outputImages: ["images/case13/output.jpg"],
        prompt: `准确使用图2色卡为图1人物上色`,
        description: "需上传一张线稿图和一张色卡图"
    },
    {
        id: 14,
        title: "文章信息图",
        creator: "@黄建同学",
        creatorUrl: "https://weibo.com/5648162302/5204549851155423",
        category: "creative",
        inputImages: [],
        outputImages: ["images/case14/output.jpg"],
        prompt: `为文章内容生成信息图
要求：
1. 将内容翻译成英文，并提炼文章的关键信息
2. 图中内容保持精简，只保留大标题
3. 图中文字采用英文
4. 加上丰富可爱的卡通人物和元素`,
        description: "需上传一段博客/文章"
    },
    {
        id: 15,
        title: "更换多种发型",
        creator: "@balconychy",
        creatorUrl: "https://x.com/balconychy/status/1960665038504779923",
        category: "character",
        inputImages: [],
        outputImages: ["images/case15/output.jpg"],
        prompt: `以九宫格的方式生成这个人不同发型的头像`,
        description: "需上传一张需要更换发型的人像图片"
    },
    {
        id: 16,
        title: "模型标注讲解图",
        creator: "@berryxia_ai",
        creatorUrl: "https://x.com/berryxia_ai/status/1960708465586004305",
        category: "creative",
        inputImages: [],
        outputImages: ["images/case16/output.jpg"],
        prompt: `绘制[3D人体器官模型展示示例心脏]用于学术展示，进行标注讲解，适用于展示其原理和[每个器官]的功能，非常逼真，高度还原，精细度非常细致的设计`,
        description: "将 [方括号] 中的文字改为需要展示的模型"
    },
    {
        id: 17,
        title: "定制大理石雕塑",
        creator: "@umesh_ai",
        creatorUrl: "https://x.com/umesh_ai/status/1960370946562564353",
        category: "style",
        inputImages: [],
        outputImages: ["images/case17/output.jpg"],
        prompt: `一张超详细的图像中主体雕塑的写实图像，由闪亮的大理石制成。雕塑应展示光滑反光的大理石表面，强调其光泽和艺术工艺。设计优雅，突出大理石的美丽和深度。图像中的光线应增强雕塑的轮廓和纹理，创造出视觉上令人惊叹和迷人的效果`,
        description: "需上传一张参考图像"
    },
    {
        id: 18,
        title: "根据食材做菜",
        creator: "@Gdgtify",
        creatorUrl: "https://x.com/Gdgtify/status/1960907695348691075",
        category: "creative",
        inputImages: ["images/case18/input1.jpg", "images/case18/input2.jpg", "images/case18/input3.jpg"],
        outputImages: ["images/case18/output1.jpg", "images/case18/output2.jpg", "images/case18/output3.jpg"],
        prompt: `用这些食材为我做一顿美味的午餐，放在盘子里，盘子的特写视图，移除其他盘子和食材`,
        description: "需上传一张带有多种食材的照片"
    },
    {
        id: 19,
        title: "数学题推理",
        creator: "@Gorden Sun",
        creatorUrl: "https://www.xiaohongshu.com/explore/68ade0e7000000001d036677",
        category: "creative",
        inputImages: ["images/case19/input.jpg"],
        outputImages: ["images/case19/output.jpg"],
        prompt: `根据问题将问题的答案写在对应的位置上`,
        description: "需上传一道数学类的题目"
    },
    {
        id: 20,
        title: "旧照片上色",
        creator: "@GeminiApp",
        creatorUrl: "https://x.com/GeminiApp/status/1960347483021959197",
        category: "editing",
        inputImages: ["images/case20/input.jpg"],
        outputImages: ["images/case20/output.jpg"],
        prompt: `修复并为这张照片上色`,
        description: "需上传一张老旧、需要修复的照片"
    },
    {
        id: 21,
        title: "OOTD穿搭",
        creator: "@302.AI",
        creatorUrl: "https://medium.com/@302.AI/google-nano-banana-vs-qwen-gpt-flux-topping-the-image-editing-leaderboard-96038b01bdcd",
        category: "character",
        inputImages: ["images/case21/input.jpg"],
        outputImages: ["images/case21/output.jpg"],
        prompt: `选择图1中的人，让他们穿上图2中的所有服装和配饰。在户外拍摄一系列写实的OOTD风格照片，使用自然光线，时尚的街头风格，清晰的全身镜头。保持图1中人物的身份和姿势，但以连贯时尚的方式展示图2中的完整服装和配饰`,
        description: "需上传一张人物图片和服装图片"
    },
    {
        id: 22,
        title: "人物换衣",
        creator: "@skirano",
        creatorUrl: "https://x.com/skirano/status/1960343968320737397",
        category: "character",
        inputImages: ["images/case22/input.jpg"],
        outputImages: ["images/case22/output.jpg"],
        prompt: `将输入图像中人物的服装替换为参考图像中显示的目标服装。保持人物的姿势、面部表情、背景和整体真实感不变。让新服装看起来自然、合身，并与光线和阴影保持一致。不要改变人物的身份或环境——只改变衣服`,
        description: "需上传人物图像和衣服图像"
    },
    {
        id: 23,
        title: "多视图结果生成",
        creator: "@Error_HTTP_404",
        creatorUrl: "https://x.com/Error_HTTP_404/status/1960405116701303294",
        category: "creative",
        inputImages: ["images/case23/input.jpg"],
        outputImages: ["images/case23/output.jpg"],
        prompt: `在白色背景上生成前、后、左、右、上、下视图。均匀分布。一致的主体。等距透视等效`,
        description: "需上传参考图像"
    },
    {
        id: 24,
        title: "电影分镜",
        creator: "@GeminiApp",
        creatorUrl: "https://x.com/GeminiApp/status/1960347483021959197",
        category: "creative",
        inputImages: ["images/case24/input.jpg"],
        outputImages: ["images/case24/output.jpg"],
        prompt: `用这两个角色创作一个令人上瘾的12部分故事，包含12张图像，讲述经典的黑色电影侦探故事。故事关于他们寻找线索并最终发现的失落的宝藏。整个故事充满刺激，有情感的高潮和低谷，以精彩的转折和高潮结尾。不要在图像中包含任何文字或文本，纯粹通过图像本身讲述故事`,
        description: "需上传参考图像"
    },
    {
        id: 25,
        title: "人物姿势修改",
        creator: "@arrakis_ai",
        creatorUrl: "https://x.com/arrakis_ai/status/1955901155726516652",
        category: "character",
        inputImages: ["images/case25/input.jpg"],
        outputImages: ["images/case25/output.jpg"],
        prompt: `让图片中的人直视前方`,
        description: "需上传参考图像"
    },
    {
        id: 26,
        title: "线稿图生成图像",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1961024423596872184",
        category: "style",
        inputImages: ["images/case26/input.jpg"],
        outputImages: ["images/case26/output.jpg"],
        prompt: `将图一人物换成图二姿势，专业摄影棚拍摄`,
        description: "需上传线稿图和参考图像"
    },
    {
        id: 27,
        title: "为图像添加水印",
        creator: "@AiMachete",
        creatorUrl: "https://x.com/AiMachete/status/1963038793705128219",
        category: "editing",
        inputImages: ["images/case27/input.jpg"],
        outputImages: ["images/case27/output.jpg"],
        prompt: `在整个图片上反复覆盖"TRUMP"这个词。`,
        description: "需上传参考图像"
    },
    {
        id: 28,
        title: "知识推理生成图像",
        creator: "@icreatelife",
        creatorUrl: "https://x.com/icreatelife/status/1962998951948517428",
        category: "creative",
        inputImages: [],
        outputImages: ["images/case28/output.jpg", "images/case28/output1.jpg"],
        prompt: `为我制作一张世界五座最高建筑的信息图 / 制作一张关于地球上最甜蜜事物的彩色信息图`,
        description: "知识推理生成信息图"
    },
    {
        id: 29,
        title: "红笔批注",
        creator: "@AiMachete",
        creatorUrl: "https://x.com/AiMachete/status/1962356993550643355",
        category: "editing",
        inputImages: ["images/case29/input.jpg"],
        outputImages: ["images/case29/output.jpg"],
        prompt: `分析这张图片。用红笔标出你可以改进的地方。`,
        description: "需上传参考图像"
    },
    {
        id: 30,
        title: "爆炸的食物",
        creator: "@icreatelife",
        creatorUrl: "https://x.com/icreatelife/status/1962724040205803773",
        category: "creative",
        inputImages: [],
        outputImages: ["images/case30/output.jpg", "images/case30/output1.jpg"],
        prompt: `在具有戏剧性的现代场景中拍摄该产品，并伴随着爆炸性的向外动态排列，主要成分新鲜和原始在产品周围飞舞，表明其新鲜度和营养价值。促销广告镜头，没有文字，强调产品，以关键品牌颜色作为背景。`,
        description: "需上传参考图像"
    },
    {
        id: 31,
        title: "制作漫画书",
        creator: "@icreatelife",
        creatorUrl: "https://x.com/icreatelife/status/1961977580849873169",
        category: "creative",
        inputImages: ["images/case31/input.jpg"],
        outputImages: ["images/case31/output.jpg"],
        prompt: `基于上传的图像，制作漫画书条幅，添加文字，写一个引人入胜的故事。我想要一本奇幻漫画书。`,
        description: "需上传参考图像"
    },
    {
        id: 32,
        title: "动作人偶",
        creator: "@icreatelife",
        creatorUrl: "https://x.com/icreatelife/status/1961653618529935720",
        category: "character",
        inputImages: ["images/case32/input.jpg"],
        outputImages: ["images/case32/output.jpg"],
        prompt: `制作一个写着 ["AI Evangelist - Kris"] 的动作人偶，并包含 [咖啡、乌龟、笔记本电脑、手机和耳机] 。`,
        description: "需上传参考图像，将 [方括号] 中的文字改为需要添加的物品"
    },
    {
        id: 33,
        title: "地图生成等距建筑",
        creator: "@demishassabis",
        creatorUrl: "https://x.com/demishassabis/status/1961077016830083103",
        category: "creative",
        inputImages: ["images/case33/input.jpg"],
        outputImages: ["images/case33/output.jpg"],
        prompt: `以这个位置为地标，将其设为等距图像（仅建筑物），采用游戏主题公园的风格`,
        description: "需上传地图的参考图像"
    },
    {
        id: 34,
        title: "参考图控制人物表情",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1963156830458085674",
        category: "character",
        inputImages: [],
        outputImages: ["images/case34/case.jpg"],
        prompt: `图一人物参考/换成图二人物的表情`,
        description: "需上传一张人物参考图和一张表情参考图"
    },
    {
        id: 35,
        title: "插画绘画过程四格",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1961772524611768452",
        category: "style",
        inputImages: [],
        outputImages: ["images/case35/case.jpg"],
        prompt: `为人物生成绘画过程四宫格，第一步：线稿，第二步平铺颜色，第三步：增加阴影，第四步：细化成型。不要文字`,
        description: "需上传一张人物参考图像"
    },
    {
        id: 36,
        title: "虚拟试妆",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1962778069242126824",
        category: "character",
        inputImages: [],
        outputImages: ["images/case36/case.jpg"],
        prompt: `为图一人物化上图二的妆，还保持图一的姿势`,
        description: "需上传一张人物参考图像和一张妆造参考图片"
    },
    {
        id: 37,
        title: "妆面分析",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1962784384693739621",
        category: "character",
        inputImages: ["images/case37/input.jpg"],
        outputImages: ["images/case37/output.jpg"],
        prompt: `分析这张图片。用红笔标出可以改进的地方
Analyze this image. Use red pen to denote where you can improve`,
        description: "需上传一张人物参考图像",
        duplicatePrompt: true,
        primaryCase: 29
    },
    {
        id: 38,
        title: "Google地图视角下的中土世界",
        creator: "@TechHallo",
        creatorUrl: "https://x.com/techhalla/status/1962292272227102941",
        category: "creative",
        inputImages: [],
        outputImages: ["images/case38/output.jpg"],
        prompt: `行车记录仪谷歌街景拍摄 | [霍比屯街道] | [霍比特人进行园艺和抽烟斗等日常活动] | [晴天]`,
        description: "将 [方括号] 中的文字改为需要的地区和天气"
    },
    {
        id: 39,
        title: "印刷插画生成",
        creator: "@Umesh",
        creatorUrl: "https://x.com/umesh_ai/status/1961110485543371145",
        category: "style",
        inputImages: [],
        outputImages: ["images/case39/output.jpg"],
        prompt: `仅使用短语 ["riding a bike"] 中的字母，创作一幅极简主义的黑白印刷插图，描绘骑自行车的场景。每个字母的形状和位置都应富有创意，以构成骑车人、自行车和动感。设计应简洁、极简，完全由修改后的 ["riding a bike"] 字母组成，不添加任何额外的形状或线条。字母应流畅或弯曲，以模仿场景的自然形态，同时保持清晰易读。`,
        description: "将 [方括号] 中的文字改为需要的文字"
    },
    {
        id: 40,
        title: "超多人物姿势生成",
        creator: "@tapehead_Lab",
        creatorUrl: "https://x.com/tapehead_Lab/status/1960878455299694639",
        category: "character",
        inputImages: [],
        outputImages: ["images/case40/case.jpg"],
        prompt: `请为这幅插图创建一个姿势表，摆出各种姿势`,
        description: "需上传一张人物参考图像"
    },
    {
        id: 41,
        title: "物品包装生成",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1962763864875167971",
        category: "creative",
        inputImages: [],
        outputImages: ["images/case41/case.jpg"],
        prompt: `把图一贴在图二易拉罐上，并放在极简设计的布景中，专业摄影`,
        description: "需上传一张物品参考图像和一张包装参考图片"
    },
    {
        id: 42,
        title: "叠加滤镜/材质",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1962520937011855793",
        category: "style",
        inputImages: [],
        outputImages: ["images/case42/case.jpg"],
        prompt: `为图一照片叠加上图二 [玻璃] 的效果`,
        description: "需上传一张参考图像和一张滤镜/材质参考图片，将 [方括号] 中的文字改为需要的滤镜/材质"
    },
    {
        id: 43,
        title: "控制人物脸型",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1961802767493939632",
        category: "character",
        inputImages: [],
        outputImages: ["images/case43/case.jpg"],
        prompt: `图一人物按照图二的脸型设计为q版形象`,
        description: "需上传一张参考图像和一张脸型参考图片"
    },
    {
        id: 44,
        title: "光影控制",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1961779457372602725",
        category: "style",
        inputImages: [],
        outputImages: ["images/case44/case.jpg"],
        prompt: `图一人物变成图二光影，深色为暗`,
        description: "需上传一张参考图像和一张光影参考图片"
    },
    {
        id: 45,
        title: "乐高玩具小人",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1961395526198595771",
        category: "style",
        inputImages: ["images/case45/input.jpg"],
        outputImages: ["images/case45/output.jpg"],
        prompt: `将照片中的人物转化为乐高小人包装盒的风格，以等距透视呈现。在包装盒上标注标题"ZHOGUE"。在盒内展示基于照片中人物的乐高小人，并配有他们必需的物品（如化妆品、包或其他物品）作为乐高配件。在盒子旁边，也展示实际乐高小人本身，未包装，以逼真且生动的方式渲染。`,
        description: "需上传一张参考图像"
    },
    {
        id: 46,
        title: "高达模型小人",
        creator: "@ZHO_ZHO_ZHO",
        creatorUrl: "https://x.com/ZHO_ZHO_ZHO/status/1961412823340265509",
        category: "style",
        inputImages: ["images/case46/input.jpg"],
        outputImages: ["images/case46/output.jpg"],
        prompt: `将照片中的人物转化为高达模型套件包装盒的风格，以等距透视呈现。在包装盒上标注标题"ZHOGUE"。在盒内展示照片中人物的高达风格机械人版本，并伴随其必需品（如化妆品、包袋或其他物品）重新设计为未来派机械配件。包装盒应类似真实的 Gunpla 盒子，包含技术插图、说明书风格细节和科幻字体。在盒子旁边，也展示实际的高达风格机械人本身，在包装外以逼真且栩栩如生的风格渲染，类似于官方 Bandai 宣传渲染图。`,
        description: "需上传一张参考图像"
    },
    {
        id: 47,
        title: "硬件拆解图",
        creator: "@AIimagined",
        creatorUrl: "https://x.com/AIimagined/status/1961431851245211958",
        category: "creative",
        inputImages: [],
        outputImages: ["images/case47/output.jpg"],
        prompt: `数码单反相机的分解图，展示了其所有配件和内部组件，例如镜头、滤镜、内部组件、镜头、传感器、螺丝、按钮、取景器、外壳和电路板。保留了数码单反相机的红色装饰。`,
        description: "数码单反相机分解图"
    }
];

// Initialize gallery
document.addEventListener('DOMContentLoaded', function() {
    renderGallery(galleryData);
    setupEventListeners();
    setupSmoothScrolling();
});

// Render gallery items
function renderGallery(items) {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    // Filter out duplicate prompts, keeping only the primary case
    const filteredItems = items.filter(item => !item.duplicatePrompt);
    
    filteredItems.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryGrid.appendChild(galleryItem);
    });
}

// Create individual gallery item
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.dataset.category = item.category;
    div.dataset.id = item.id;

    // Create image pairs HTML
    const imagePairsHtml = createImagePairsHtml(item);

    div.innerHTML = `
        <div class="item-header">
            <h3>例 ${item.id}: ${item.title}</h3>
            <div class="creator">by <a href="${item.creatorUrl}" target="_blank">${item.creator}</a></div>
        </div>
        <div class="item-images">
            ${imagePairsHtml}
        </div>
        <div class="item-footer">
            <div class="prompt-preview">${item.prompt}</div>
        </div>
    `;

    // Add click event to open modal
    div.addEventListener('click', () => openModal(item));

    return div;
}

// Create image pairs HTML
function createImagePairsHtml(item) {
    // If no input images, show single output image
    if (item.inputImages.length === 0 && item.outputImages.length > 0) {
        return `
            <div class="single-image">
                <img src="${item.outputImages[0]}" alt="输出图像" loading="lazy">
            </div>
        `;
    }
    
    // If both input and output images exist, show comparison
    const maxPairs = 2; // Show maximum 2 pairs in grid view
    const pairs = [];
    
    for (let i = 0; i < Math.min(maxPairs, Math.max(item.inputImages.length, item.outputImages.length)); i++) {
        const inputImg = item.inputImages[i] || '';
        const outputImg = item.outputImages[i] || '';
        
        pairs.push(`
            <div class="image-pair">
                <h4>输入 ${i + 1}</h4>
                ${inputImg ? `<img src="${inputImg}" alt="输入图像 ${i + 1}" loading="lazy">` : '<div class="no-image">无输入图像</div>'}
            </div>
            <div class="image-pair">
                <h4>输出 ${i + 1}</h4>
                ${outputImg ? `<img src="${outputImg}" alt="输出图像 ${i + 1}" loading="lazy">` : '<div class="no-image">无输出图像</div>'}
            </div>
        `);
    }
    
    return pairs.join('');
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            const filter = btn.dataset.filter;
            filterGallery(filter);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        searchGallery(searchTerm);
    });

    // Modal close button
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('imageModal');
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Filter gallery by category
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Search gallery
function searchGallery(searchTerm) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const prompt = item.querySelector('.prompt-preview').textContent.toLowerCase();
        const creator = item.querySelector('.creator').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || prompt.includes(searchTerm) || creator.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Open modal with item details
function openModal(item) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrompt = document.getElementById('modalPrompt');
    const modalCreator = document.getElementById('modalCreator');
    const modalInputImage = document.getElementById('modalInputImage');
    const modalOutputImage = document.getElementById('modalOutputImage');
    const modalImages = document.querySelector('.modal-images');

    // Set modal content
    modalTitle.textContent = `例 ${item.id}: ${item.title}`;
    modalPrompt.textContent = item.prompt;
    modalCreator.textContent = item.creator;
    modalCreator.href = item.creatorUrl;

    // Handle single image case (no input images)
    if (item.inputImages.length === 0 && item.outputImages.length > 0) {
        // Show single image layout
        modalImages.style.gridTemplateColumns = '1fr';
        modalImages.innerHTML = `
            <div class="modal-image-container">
                <h3>生成图像</h3>
                <img src="${item.outputImages[0]}" alt="生成图像 - ${item.title}">
            </div>
        `;
    } else {
        // Show comparison layout
        modalImages.style.gridTemplateColumns = '1fr 1fr';
        modalImages.innerHTML = `
            <div class="modal-image-container">
                <h3>输入图像</h3>
                <img src="${item.inputImages[0] || ''}" alt="输入图像 - ${item.title}">
            </div>
            <div class="modal-image-container">
                <h3>输出图像</h3>
                <img src="${item.outputImages[0] || ''}" alt="输出图像 - ${item.title}">
            </div>
        `;
    }

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Add loading animation for images
function loadImageWithLoading(img) {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.style.position = 'absolute';
    loadingDiv.style.top = '50%';
    loadingDiv.style.left = '50%';
    loadingDiv.style.transform = 'translate(-50%, -50%)';
    
    img.parentNode.style.position = 'relative';
    img.parentNode.appendChild(loadingDiv);
    
    img.addEventListener('load', () => {
        loadingDiv.remove();
    });
    
    img.addEventListener('error', () => {
        loadingDiv.remove();
        img.alt = '图像加载失败';
        img.style.opacity = '0.5';
    });
}

// Apply loading to all images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        loadImageWithLoading(img);
    });
});

// Add intersection observer for lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// Observe all images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});
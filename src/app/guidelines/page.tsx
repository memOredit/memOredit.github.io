﻿import Link from 'next/link'

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-max py-4">
          <Link 
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            ゲームタイトル
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="container-max py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <span>/</span>
            <span className="text-gray-900">配信・二次創作ガイドライン</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container-max py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              配信・二次創作ガイドライン
            </h1>
            <p className="text-xl text-gray-600">
              本ゲームの配信や二次創作に関するガイドラインをご確認ください
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* 配信について */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                配信について
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  本ゲームの配信は、以下の条件を満たす場合に許可いたします。
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>営利・非営利を問わず、個人による配信は自由に行っていただけます</li>
                  <li>配信時には、ゲームタイトルを明記してください</li>
                  <li>ネタバレを含む内容の配信は、適切な注意書きを行ってください</li>
                  <li>公序良俗に反する内容との組み合わせでの配信はご遠慮ください</li>
                </ul>
              </div>
            </section>

            {/* 二次創作について */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                二次創作について
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  本ゲームのキャラクターや世界観を使用した二次創作について、以下のガイドラインをお守りください。
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>個人の趣味の範囲での二次創作は自由に行っていただけます</li>
                  <li>商用利用については事前にご相談ください</li>
                  <li>キャラクターの設定を大きく逸脱する内容はご遠慮ください</li>
                  <li>他者の権利を侵害する内容は禁止いたします</li>
                  <li>二次創作物には「二次創作」である旨を明記してください</li>
                </ul>
              </div>
            </section>

            {/* 禁止事項 */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
                禁止事項
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  以下の行為は禁止いたします。
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ゲームデータの改変・解析・リバースエンジニアリング</li>
                  <li>公式と誤認される可能性のある表現</li>
                  <li>誹謗中傷や差別的な内容を含む創作物</li>
                  <li>過度に暴力的・性的な内容を含む創作物</li>
                  <li>他の知的財産権を侵害する内容</li>
                </ul>
              </div>
            </section>

            {/* お問い合わせ */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
                お問い合わせ
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  ガイドラインに関するご質問や、商用利用についてのご相談は、以下までお問い合わせください。
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold">お問い合わせ先</p>
                  <p>メール: contact@example.com</p>
                  <p>Twitter: @gameofficial</p>
                </div>
              </div>
            </section>

            {/* 注意事項 */}
            <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">
                ⚠️ 重要な注意事項
              </h3>
              <p className="text-yellow-700">
                本ガイドラインは予告なく変更される場合があります。最新の情報は本ページでご確認ください。
                また、ガイドラインに違反する行為が確認された場合、法的措置を取る場合があります。
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ホームに戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
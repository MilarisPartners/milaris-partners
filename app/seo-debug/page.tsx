"use client";

import { useState, useEffect } from 'react';
import { auditSEO, SEOAuditResult } from '@/utils/seo-audit';
import { seoConfig } from '@/utils/seo';

export default function SEODebugPage() {
  const [auditResult, setAuditResult] = useState<SEOAuditResult | null>(null);
  const [loading, setLoading] = useState(false);

  const runAudit = async () => {
    setLoading(true);
    try {
      const result = await auditSEO();
      setAuditResult(result);
    } catch (error) {
      console.error('Erreur lors de l\'audit SEO:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    runAudit();
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getIssueColor = (type: string) => {
    switch (type) {
      case 'critical': return 'text-red-600 bg-red-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'info': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🔍 SEO Debug & Audit - Milaris Partners
          </h1>
          <p className="text-gray-600 mb-6">
            Cette page permet de visualiser et analyser tous les éléments SEO du site.
          </p>
          
          <button
            onClick={runAudit}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Audit en cours...' : 'Relancer l\'audit SEO'}
          </button>
        </div>

        {/* Résultats de l'audit */}
        {auditResult && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Résultats de l'audit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(auditResult.score)}`}>
                  {auditResult.score}/100
                </div>
                <div className="text-gray-600">Score SEO</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {auditResult.summary.critical}
                </div>
                <div className="text-gray-600">Critique</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {auditResult.summary.warning}
                </div>
                <div className="text-gray-600">Avertissement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {auditResult.summary.info}
                </div>
                <div className="text-gray-600">Info</div>
              </div>
            </div>

            {/* Issues détaillées */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">🚨 Problèmes détectés</h3>
              {auditResult.issues.length === 0 ? (
                <p className="text-green-600">✅ Aucun problème détecté !</p>
              ) : (
                auditResult.issues.map((issue, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${getIssueColor(issue.type)}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold">{issue.title}</h4>
                        <p className="text-sm opacity-80">{issue.description}</p>
                        {issue.element && (
                          <code className="text-xs bg-black bg-opacity-10 px-2 py-1 rounded mt-1 inline-block">
                            {issue.element}
                          </code>
                        )}
                      </div>
                      <span className="text-xs uppercase font-bold opacity-60">
                        {issue.type}
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium">
                      💡 {issue.recommendation}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Recommandations */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Recommandations</h3>
              <ul className="space-y-2">
                {auditResult.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    {recommendation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Configuration SEO actuelle */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">⚙️ Configuration SEO</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(seoConfig).map(([pageName, pageConfig]) => (
              <div key={pageName} className="border rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{pageName}</h3>
                
                {Object.entries(pageConfig).map(([lang, config]) => (
                  <div key={lang} className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 uppercase text-sm">
                      {lang}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Titre:</span>
                        <p className="text-gray-600 truncate">{config.title}</p>
                      </div>
                      <div>
                        <span className="font-medium">Description:</span>
                        <p className="text-gray-600 line-clamp-2">{config.description}</p>
                      </div>
                      <div>
                        <span className="font-medium">Mots-clés:</span>
                        <p className="text-gray-600 text-xs">
                          {config.keywords?.join(', ') || 'Aucun'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Métadonnées de la page actuelle */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 Métadonnées actuelles</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900">Title</h3>
              <p className="bg-gray-100 p-2 rounded text-sm">
                {typeof document !== 'undefined' ? document.title : 'N/A'}
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900">Meta Description</h3>
              <p className="bg-gray-100 p-2 rounded text-sm">
                {typeof document !== 'undefined' 
                  ? document.querySelector('meta[name="description"]')?.getAttribute('content') || 'Aucune'
                  : 'N/A'}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">Canonical URL</h3>
              <p className="bg-gray-100 p-2 rounded text-sm">
                {typeof document !== 'undefined' 
                  ? document.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'Aucune'
                  : 'N/A'}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">Open Graph</h3>
              <div className="bg-gray-100 p-2 rounded text-sm space-y-1">
                <div>
                  <strong>og:title:</strong> {typeof document !== 'undefined' 
                    ? document.querySelector('meta[property="og:title"]')?.getAttribute('content') || 'Aucun'
                    : 'N/A'}
                </div>
                <div>
                  <strong>og:description:</strong> {typeof document !== 'undefined' 
                    ? document.querySelector('meta[property="og:description"]')?.getAttribute('content') || 'Aucune'
                    : 'N/A'}
                </div>
                <div>
                  <strong>og:image:</strong> {typeof document !== 'undefined' 
                    ? document.querySelector('meta[property="og:image"]')?.getAttribute('content') || 'Aucune'
                    : 'N/A'}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">Données structurées</h3>
              <p className="bg-gray-100 p-2 rounded text-sm">
                {typeof document !== 'undefined' 
                  ? `${document.querySelectorAll('script[type="application/ld+json"]').length} script(s) JSON-LD détecté(s)`
                  : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        {/* Avertissement */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
          <div className="flex">
            <div className="text-yellow-400 mr-3">⚠️</div>
            <div>
              <h3 className="font-bold text-yellow-800">Page de développement</h3>
              <p className="text-yellow-700 text-sm">
                Cette page est destinée au développement et aux tests. Elle ne doit pas être accessible en production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
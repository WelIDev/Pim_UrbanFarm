﻿#pragma checksum "..\..\..\..\..\Views\Cadastros\CadastroProdutoPage.xaml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1CD01DF3ED5E5DC0B176F2B856E9311E6BE0F781"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Controls.Ribbon;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace DesktopApp.Views.Cadastros {
    
    
    /// <summary>
    /// CadastroProdutoPage
    /// </summary>
    public partial class CadastroProdutoPage : System.Windows.Controls.Page, System.Windows.Markup.IComponentConnector {
        
        
        #line 58 "..\..\..\..\..\Views\Cadastros\CadastroProdutoPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox NomeProdutoTextBox;
        
        #line default
        #line hidden
        
        
        #line 63 "..\..\..\..\..\Views\Cadastros\CadastroProdutoPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox PrecoTextBox;
        
        #line default
        #line hidden
        
        
        #line 68 "..\..\..\..\..\Views\Cadastros\CadastroProdutoPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox EstoqueTextBox;
        
        #line default
        #line hidden
        
        
        #line 74 "..\..\..\..\..\Views\Cadastros\CadastroProdutoPage.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox DescricaoTextBox;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "9.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/DesktopApp;component/views/cadastros/cadastroprodutopage.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\..\..\..\Views\Cadastros\CadastroProdutoPage.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "9.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            this.NomeProdutoTextBox = ((System.Windows.Controls.TextBox)(target));
            return;
            case 2:
            this.PrecoTextBox = ((System.Windows.Controls.TextBox)(target));
            return;
            case 3:
            this.EstoqueTextBox = ((System.Windows.Controls.TextBox)(target));
            return;
            case 4:
            this.DescricaoTextBox = ((System.Windows.Controls.TextBox)(target));
            return;
            case 5:
            
            #line 79 "..\..\..\..\..\Views\Cadastros\CadastroProdutoPage.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.CadastrarProduto_Click);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
    }
}
